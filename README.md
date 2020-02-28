# ReadyBaby Cloud Functions 

## Description
- 적용대상: ReadyBaby Apps Script, 기타 GCP cloud functions 개발 프로젝트
---  
- based off of the [typescript cloud function templates](https://github.com/search?o=desc&q=typescript+cloud+function&s=stars&type=Repositories)

### Prerequisites
npm, tsc, gcloud commands installed

### 기본 구성
- node 10.x
- typescript+gcp cloud function 개발환경

### Getting Started
- Edit .env
```
FUNCTION_NAME=helloWorld
REGION=
GCP_PROJECT=kidskid-19
RUNTIME=nodejs10
```

- Lint
```
$ npm run lint
```

## Build
```
$ npm run build
```

## Test
```
$ npm run test
```

## Deploy
```
$ npm run deploy:staging OR $ npm run deploy:prod
```

## 참고사항
- deploy 셋팅확인 필요. 환경변수 잘 설정해서 적용하기
- production 업로드 전, 전체백업 필수(currentCode, DB backup등)

### Todo List

- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars

## Contribution
Feel free to create a pull request:) Recommended settings, bug fixes, descriptions and more!
