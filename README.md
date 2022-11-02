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

   - [개요](#1-개요)

   - [AWS 아키텍쳐](#2-aws-아키텍쳐)

   - [절차 및 진행](#3-절차-및-실행)

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
- 본 서비스는 수천만명의 동시접속자를 위해 설계되어야 하기에 AWS Elastic Load Balancing을 사용하여 네트워크 트래픽을
분산합니다. 또한, EC2 Auto-Scailing을 활용하여 서버의 부하에 따라 인스턴스가 자동으로 늘어나고 줄어들어 서버의 수평적
확장이 가능합니다.

- 본 서비스의 데이터베이스는 MongoDB Atlas를 선택했습니다. 서버만 분산되어서는 서비스 사용시 데이터베이스의 부하가 커질
것이라 생각되었으며 수월하게 수평적 확장을 하기 위해 NoSQL을 사용했습니다. 또한, MongoDB는 다른 NoSQL 중에서도 스키마를
지원하기에 데이터의 무결성을 지킬 수 있다는 장점이 있어 선택하게 되었습니다.
```

### 2. AWS 아키텍쳐

<img src="https://user-images.githubusercontent.com/92367032/199555827-70f407bb-d26e-483c-ae01-f39b3526edc8.png"/>

### 3. 절차 및 실행

**템플릿 설정**
<img src="https://user-images.githubusercontent.com/92367032/199533812-c2f64055-93c4-4afd-b22c-fa3f617d697d.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199534108-a517c79f-537d-4ffc-9264-606199551db6.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199534105-31a870a2-0e58-44c6-919f-df06cffade9c.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199534101-0058ba48-d41e-4fa0-9074-2f4f8c856c58.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199534095-0b5df1a3-7940-42f2-aa9e-6dd1e1f3f9a0.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199534084-c3e39459-b1bd-4819-be50-2670be224d93.png"/>

**Auto-Scailing 설정**
<img src="https://user-images.githubusercontent.com/92367032/199534815-ee37730a-5c1e-4f33-9b33-4f694fbac8b2.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199534814-cfca7104-281e-4ed6-9e27-3f3d96414e76.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199534810-b9baf530-fbb5-402f-9604-51e047a7eaef.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199534803-e50b98ae-fdbc-4cac-918e-cdac842a8462.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199534799-b33c92e3-dfb4-4dc8-bb73-432ab97f40fa.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199534797-80e57b0f-d3f2-4826-8f82-40b76aa737c7.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199534791-c40d39a6-d246-4d88-a5e9-97dc96092eff.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199534785-823c3f57-210f-4ed6-a345-b7e3077fc519.png"/>

**보안그룹 설정**
<img src="https://user-images.githubusercontent.com/92367032/199537013-ed01bf42-ca0f-404c-8b24-379123551430.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199537008-015ef8a9-7cca-40bf-9960-4706c0ac42de.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199536995-e78350d7-9536-459b-912a-c55a31061801.png"/>

**인스턴스에 서버 설치 및 실행**
<img src="https://user-images.githubusercontent.com/92367032/199538833-175e267d-710d-4fde-a165-9c8680caab89.png"/>

#### 1. 인스턴스에 개발 환경 구축하기

```bash
1   $ sudo apt update
```

먼저 nvm 설치는 [NVM GitHub 페이지](https://github.com/nvm-sh/nvm)의 Install & Update Script 부분을 참조하여 진행합니다.

다음으로는 node.js를 설치합니다. 터미널에 아래 명령어를 입력하여 설치를 진행합니다.

```bash
$ nvm install node
```

node.js의 설치가 끝나면 npm 명령어가 정상적으로 입력되지 않는 상황을 방지하기 위해서 터미널에

```bash
$ sudo apt install npm
```

명령어를 입력해서 npm 설치를 진행합니다. 위 과정이 모두 끝나면 node.js 기반 서버를 실행하는 데 필요한 개발 환경 구축이 완료됩니다.

#### 2. git을 통해 서버 코드 클론 받기

스프린트 코드가 저장된 깃헙 레포지토리 주소를 복사하고, git clone 명령어를 통해 EC2 인스턴스에 스프린트 코드를 클론 받습니다. (https나 ssh로 clone을 받습니다.)

정상적으로 클론했는지 확인하기 위해 터미널에 ls 명령어를 입력합니다.

`survey-api` 디렉토리가 있다면 정상적으로 다운로드가 완료된 것입니다. 터미널을 통해 스프린트 코드 안의 `survey-api` 디렉토리로 이동합니다.

`survey-api` 폴더로 이동한 뒤, `npm install` 명령어를 입력해서 필요한 모듈을 다운 받습니다.

폴더에서 .env 파일을 생성하여 [환경변수](#환경-변수-설정)를 작성합니다.

#### 3. EC2 인스턴스에서 서버 실행하기

node 프로세스가 ssh 접속 여부와는 상관없이 늘 실행되게 만들기 위해 `PM2`라는 프로그램을 설치합니다.

```bash
$ npm install pm2 -g
```

PM2를 전역에 설치하고 나면, "pm2 start 파일 이름" 명령을 이용해 node.js 앱을 백그라운드로 실행할 수 있습니다.

80번 포트에서 실행시킬것이기에 `PM2`에 관리자 권한을 부여해야 합니다. 따라서 'authbind'라는 패키지를 추가적으로 설치합니다.

터미널에서 아래 명령어를 차례대로 입력하여 authbind를 설치합니다.

```bash
$ sudo apt-get update
$ sudo apt-get install authbind
$ sudo touch /etc/authbind/byport/80
$ sudo chown ubuntu /etc/authbind/byport/80
$ sudo chmod 755 /etc/authbind/byport/80
$ authbind --deep pm2 update
```

PM2에 관리자 권한을 부여하기 위해서는 'authbind --deep' 명령어를 앞에 추가해야 합니다.

```bash
$ authbind --deep pm2 start dist/main.js
```

명령어를 통해 서버를 다시 실행합니다.

**AMI Snapshot 설정**
<img src="https://user-images.githubusercontent.com/92367032/199546560-a5bd0574-ec23-488f-8752-a8c51ac6eace.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199546558-46a97caa-829c-40bc-92e8-34f369d0728a.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199546552-99927433-24a7-434b-9d12-7592f480fe62.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199546549-d0005216-905f-42cb-8dd7-5fb6f901c0ef.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199546538-99a1daa6-0cd2-42e2-a521-ad6bcc4500de.png"/>

**대상 그룹 설정**
<img src="https://user-images.githubusercontent.com/92367032/199547248-20a8cb9b-bd4b-4e5e-91e5-0924678dbd3c.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199547243-c0441790-1379-4996-a68c-4030775b2fbb.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199547239-669ca3b6-0971-4ccc-b1ac-795fb4d61c4a.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199547232-af32894d-bebb-4b75-8658-101da9651e1c.png"/>

**로드 밸런서 설정**
<img src="https://user-images.githubusercontent.com/92367032/199547758-1302beec-f176-4910-892d-e8ba25598dbe.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199547754-4bbf4c3c-76ad-4755-a2f6-50cea92bc59c.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199547751-0ae225ed-c768-4bd8-aeab-ca5bc321661e.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199547747-89d9eb13-c8a3-4825-a74e-7d5d0e6858da.png"/>
<img src="https://user-images.githubusercontent.com/92367032/199547743-43c2fadf-ea53-4dcf-b028-e6dbcfe82599.png"/>

## API 문서

### ✅ 설문 조사 생성하기

**request**

```http
POST /surveys  HTTP/1.1
Host: MySurveyALB-1333010105.ap-northeast-2.elb.amazonaws.com
Content-type: Application/JSON

{
    "name":"홍길동",
    "email": "hong@gmail.com",
    "phoneNumber": "+8221111111",
    "agreement": true
}
```

**response**

```http
HTTP/1.1 201  Created
Content-type: Application/JSON

{
    "name": "홍길동",
    "email": "dhrjdn@gmail.com",
    "phoneNumber": "+8221111111",
    "agreement": true,
    "_id": "636280231c8053ec137209da"
}
```
