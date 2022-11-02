<div align=center>
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=250&section=header&text=📝Survey%20API%20서버📝&fontSize=45" />
</br>
<b id=content>마케팅 이벤트 페이지를 통해 전달되는 고객 정보를 수집할 백엔드 서비스를 제공합니다</b>
</br></br>
<h3>📚 STACKS</h3>
<img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=NestJS&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
<img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=white">
</div>

## 목차

1. [설치환경](#설치환경)

2. [설치](#설치)

3. [환경 변수 설정](#환경-변수-설정)

4. [앱 실행](#앱-실행)

5. [테스트](#테스트)

   - [Unit TEST](#Unit-TEST)

   - [E2E TEST](#통합-test)

6. [요구사항](#요구사항)
7. [서비스 배포](#서비스-배포)
8. [API 문서](#api-문서)

## 설치환경

- Ubuntu 22.04.1 LTS
- MongoDB Atlas
- Node.js v16.17.1 (lts version)
- npm v8.15.0

## 설치

```bash
## 서버 설치
$ npm install
```

## 환경 변수 설정

```bash
## .env 안에 들어갈 내용
MONGO_USERNAME= MongoDB Atlas 유저 이름
MONGO_PASSWORD= MongoDB Atlas 비밀번호
MONGO_NAME= MongoDB Atlas Collection 이름
```

## 앱 실행

```bash
# development
$ npm run start
```

## 테스트

```bash
# Unit test
$ npm run test

# 통합 test
$ npm run test:e2e
```

### Unit TEST

**테스트 커버리지**

Survey Controller

- 설문지 컨트롤러 확인
- 컨트롤러의 함수 확인
- 설문지 서비스의 함수(create) 호출 확인
- 설문지 작성 확인

  <img src="https://user-images.githubusercontent.com/92367032/198156634-4c5faa00-8bef-45a6-863c-127ad455636b.png"/>

Survey Service

- 설문지 서비스 확인
- 서비스의 함수 확인
- 설문지 레포지토리의 함수(create) 호출 확인
- 설문지 작성 확인
- 수집 동의 하지 않을 시 에러 반환
- 이름이 문자가 아니면 에러 반환

  <img src="https://user-images.githubusercontent.com/92367032/198156880-e2c221f4-ceaa-4d22-8efb-30a9bedfb436.png"/>

Survey Repository

- 설문지 레포지토리 확인
- 레포지토리의 함수 확인
- MongoDB Model 함수(create) 호출 확인
- 설문지 작성 확인

  <img src="https://user-images.githubusercontent.com/92367032/198156676-e819672c-a8c5-49eb-bce4-15623ad0f689.png"/>

### 통합 TEST

<img src="https://user-images.githubusercontent.com/92367032/198159160-89d53918-0665-4d4c-a563-5deba179933f.png"/>

## 요구사항

### A. 설문지 관리

```
➡️ 수집한 개인 정보를 전달받을 백엔드 서비스 및 API 엔드포인트를 구현합니다.
➡️ 수집한 개인 정보는 데이터베이스에 저장되어야 합니다.
➡️ AWS 클라우드가 제공하는 서비스를 이용해 개발 및 실행되어야 합니다.
➡️ 동시접속자가 수천만명에 이를 것으로 예상되므로 수평적 확장이 가능해야 합니다.
```

## 서비스 배포

### 1. 개요

```
- 본 서비스는 수천만명의 동시접속자를 위해 설계되어야 하기에 AWS Elastic Load Balancing을 사용하여 네트워크 트래픽을 분산합니다. 또한, EC2 Auto-Scailing을 활용하여 서버의 부하에 따라 인스턴스가 자동으로 늘어나고 줄어들어 서버의 수평적 확장이 가능합니다.

- 본 서비스의 데이터베이스는 MongoDB Atlas를 선택했습니다. 서버만 분산되어서는 서비스 사용시 데이터베이스의 부하가 커질 것이라 생각되었으며 수월하게 수평적 확장을 하기 위해 NoSQL을 사용했습니다. 또한, MongoDB는 다른 NoSQL 중에서도 스키마를 지원하기에 데이터의 무결성을 지킬 수 있다는 장점이 있어 선택하게 되었습니다.
```

### 2. 절차

### 3. 실행
