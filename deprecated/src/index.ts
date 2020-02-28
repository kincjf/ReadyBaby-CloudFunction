import {Request, Response} from "express"

import PubsubEvent = GoogleCloudPlatform.CloudFunctions.PubsubEvent
import StorageEvent = GoogleCloudPlatform.CloudFunctions.StorageEvent
import Callback = GoogleCloudPlatform.CloudFunctions.Callback

/*
const pubsub  = require("@google-cloud/pubsub")({
    keyFilename: "/path/to/keyfile.json",
    projectId: "grape-spaceship-123"})
console.log(pubsub)
*/

import * as settings from "./settings.json"

console.log(settings)

export function helloWorldHTTP(req: Request, res: Response) {
    console.log(req)

    res
        .status(200)
        .type("application/json")
        .send("{ \"result\": \"Hello World!\"}")
        .end()
}

export function helloWorldPubSub(event: PubsubEvent, callback: Callback) {
    console.log("Hello World! I have got event from Google Cloud Pub/Sub topic: ", event.data)
    callback()
}

export function helloWorldStorage(event: StorageEvent, callback: Callback) {
    console.log("Hello World! I have got event from Google Cloud Storage bucket: ", event.data)
    callback()
}

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as _cors from 'cors';

import { analysisFunction } from './analysis.function';
import { deleteUserDataFunction } from './delete-user-data.function';
import { functionsConfig } from './functions-config';

// CORS configuration.
const options: _cors.CorsOptions = {
    origin: functionsConfig.whitelist
};
const cors = _cors;

// Initializes Cloud Functions.
admin.initializeApp(functions.config().firebase);

// Firestore settings.
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

/**
 * Trigger a function with an HTTP request.
 */
export const httpFunction = functions.https.onRequest((request: functions.Request, response: functions.Response) => {
    cors(options)(request, response, () => analysisFunction(request, response));
});

/**
 * Trigger a function on user deletion.
 */
export const authFunction = functions.auth.user().onDelete((user: admin.auth.UserRecord) => {
    return deleteUserDataFunction(user);
});

// Add here other functions.
