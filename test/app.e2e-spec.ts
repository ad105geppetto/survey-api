import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "./../src/app.module";

let app: INestApplication;
let surveyInfo;

beforeAll(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixture.createNestApplication();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.init();
});

describe("📌 설문지 통합 테스트", () => {
  describe("POST /signup", () => {
    beforeEach(() => {
      surveyInfo = {
        name: "홍길동",
        email: "hong@gmail.com",
        phoneNumber: "+82105555555",
        agreement: true,
      };
    });
    it("설문 생성 요청을 성공하면, 상태코드 201을 반환합니다.", async () => {
      const response = await request(app.getHttpServer())
        .post("/surveys")
        .send(surveyInfo);

      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe("홍길동");
      expect(response.body.email).toBe("hong@gmail.com");
      expect(response.body.phoneNumber).toBe("+82105555555");
      expect(response.body.agreement).toBe(true);
    });

    it("설문을 작성하지 않고 요청하면, 상태코드 400을 반환합니다.", async () => {
      const surveyInfo = {};
      const response = await request(app.getHttpServer())
        .post("/surveys")
        .send(surveyInfo);

      expect(response.statusCode).toBe(400);
    });

    it("이름이 문자가 아니라면, 상태코드 400을 반환합니다.", async () => {
      surveyInfo.name = "홍%%길동23";
      const response = await request(app.getHttpServer())
        .post("/surveys")
        .send(surveyInfo);

      expect(response.statusCode).toBe(400);
    });

    it("유효하지 않은 이메일이라면, 상태코드 400을 반환합니다.", async () => {
      surveyInfo.email = "fake@fakemail";
      const response = await request(app.getHttpServer())
        .post("/surveys")
        .send(surveyInfo);

      expect(response.statusCode).toBe(400);
    });

    it("국가코드가 포함되지 않은 전화번호라면, 상태코드 400을 반환합니다.", async () => {
      surveyInfo.phoneNumber = "02555555";
      const response = await request(app.getHttpServer())
        .post("/surveys")
        .send(surveyInfo);

      expect(response.statusCode).toBe(400);
    });

    it("개인정보 수집 동의를 하지 않으면, 상태코드 400을 반환합니다.", async () => {
      surveyInfo.agreement = false;
      const response = await request(app.getHttpServer())
        .post("/surveys")
        .send(surveyInfo);

      expect(response.statusCode).toBe(400);
    });
  });
});
