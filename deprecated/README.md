# Deprecated 

## Description
- 예전에 썼던 코드를 저장하기위한 목적
- 기존에 찾아놨던 쓸만한 코드를 몽땅 넣어놓고 참고하기 위한 목적
- 문서등 적당한 크기의 기타 자료를 그냥 넣어놓고 저장소 형태로 활용
- 해당 프로젝트 작업시 참고했던 URL등을 본 README.md에 작성해놓으려고
- 다른사람이 비슷한 프로젝트의 코드설계나 파일배치를 어떻게 하는지 참고하면 좋을만한 자료들 모음
- 이런것도 있구나~ 하고 알아두면 쓸만할 것 같은 정보 저장
- main README 에는 쓰기 많은 양의 내용을 적당한 곳에 옮겨적기 위한 연습장
---  
- based off of the [search "couchdb typescript"](https://github.com/search?p=2&q=couchdb+typescript&type=Repositories)
- based off of the [search "pouchdb typescript"](https://github.com/search?p=4&q=pouchdb+typescript&type=Repositories)
- based off of the [search "cloudant typescript"](https://github.com/search?q=cloudant+typescript&type=Repositories)

## 기타 참고사항, 참고자료

### Note
**200229 custom code 설계내용**

customCode: "구분-항목1차-항목2차-항목3차-필요성" 이정도만 만들면 될 것 같다.

회의를 했을때는, 식별자 보다는 cloudant dashboard에서 디버그시 몇개가 있는지 육안으로 데이터를 확인할 수 있는 식별자로 활용하고 싶어하는 것 같음

하지만, 장기적인 관점에서는 로직-데이터 debug를 위한 TDD 코드나 전처리 확인을 할 수 있게 해야한다. 상황별 DB queryView도 많이 만들어놓고 필요에 따라 쉽게 조회할 수 있게 해놓는것도 필요함.

결론적으로, 작업을 하긴 하지만 현재의 방법은 근본적 해결방법은 아니며 임시해결방법이라는 것을 알고 있어야 한다.

```typescript
// 방법1. 언어별 의미를 통일해야 나중에 통합분석이 가능하기 때문에, 통합code치환을 위한 매칭테이블형
// 일반적인 DB설계방법이지만, 아래 형식과 같이 직접 변수에 대한 key-value에 대한 영문명을 일일이 정의를 해야함. 
// 향후 빅데이터 분석매칭을 위해서는 반드시 필요한 과정이긴 하다. 하지만, 현재 시간이 없는데 작업을 하는것은 무리가 있음
"needs-period": {  // 필요시기
    "before-pregnant": {
        "code": 0011,
        "ko-kr": "임신전",
        "en-us": "Before Pregnant",
        ...
    },
    "pregnant-init": {
        ...
    }
}
```

```typescript
// 방법2. 각 field별로 code를 자동생성한 후 조합
// 이 방법이 제일쉽긴함. 하지만, 데이터가 추가되어도 customCode가 의미가 있으려면
// '입력시간-created_at' 또는 '데이터 입력순'을 기준으로 처리해야함. 그래야 나중에 업데이트 또는 데이터 추가시 customCode가 재계산되어도 기존의 customCode가 바뀌지 않음.
// DB에서는 query 결과 조회시 입력순서별로 결과가 조회되는지 보장할 수 없음. 그래서 생성로직에 의해서 기존 값이 자동반드시 created_at field를 만들어야 한다.
// 또한, 혹시나 업데이트/데이터추가시 customCode 자동변경 되는 상황이 생길수도 있음...
[{  // "구분.json" 
    "attr": "구분",
    "key": "작성자용",
    "val": "000a"
}]
[{  // "항목1차.json"
    "attr": "항목 1차",
    "key": "운동",
    "val": "000h"
}]
[{...}]  // 항목2차.json, 항목3차.json, 필요성.json
```


### 참고내용
- client에서도 pouchDB로 작업하기 위해서, 코드호환성과 정보교환성을 높이기 위해서 server도 pouchdb-node로 개발하면 좋을 것 같다.
---
- https://github.com/ovrmrw/cloudant-ts-sample
- https://github.com/apache/couchdb-nano
- https://github.com/ibmecod/nodejs-cloudant
- https://github.com/IBM/cache-IoT-data-for-Carbon-UI
- https://github.com/iamwilliamdiaz/nodejs_typescript_loopback/tree/master/src
- https://github.com/ovrmrw/cloudant-ts-sample
- https://medium.com/codait/choosing-a-cloudant-library-d14c06f3d714
- https://www.npmjs.com/package/pouchdb-node
- https://github.com/iamwilliamdiaz/nodejs_typescript_loopback
---
- https://medium.com/@glynn_bird/modelling-cloudant-data-in-typescript-b95da651e9a7
- https://cloud.ibm.com/docs/node?topic=nodejs-cloudant
- https://cloud.ibm.com/docs/services/Cloudant/libraries?topic=cloudant-third-party-client-libraries

### Todo List

- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
