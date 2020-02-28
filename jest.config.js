module.exports = {
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
  ],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "src/app/tsconfig.json"
    }
  },
  testMatch: [
    "**/tests/**/*.test.ts"
  ]
};