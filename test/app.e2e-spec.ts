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

describe("π μ€λ¬Έμ§ ν΅ν© νμ€νΈ", () => {
  describe("POST /signup", () => {
    beforeEach(() => {
      surveyInfo = {
        name: "νκΈΈλ",
        email: "hong@gmail.com",
        phoneNumber: "+82105555555",
        agreement: true,
      };
    });
    it("μ€λ¬Έ μμ± μμ²­μ μ±κ³΅νλ©΄, μνμ½λ 201μ λ°νν©λλ€.", async () => {
      const response = await request(app.getHttpServer())
        .post("/surveys")
        .send(surveyInfo);

      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe("νκΈΈλ");
      expect(response.body.email).toBe("hong@gmail.com");
      expect(response.body.phoneNumber).toBe("+82105555555");
      expect(response.body.agreement).toBe(true);
    });

    it("μ€λ¬Έμ μμ±νμ§ μκ³  μμ²­νλ©΄, μνμ½λ 400μ λ°νν©λλ€.", async () => {
      const surveyInfo = {};
      const response = await request(app.getHttpServer())
        .post("/surveys")
        .send(surveyInfo);

      expect(response.statusCode).toBe(400);
    });

    it("μ΄λ¦μ΄ λ¬Έμκ° μλλΌλ©΄, μνμ½λ 400μ λ°νν©λλ€.", async () => {
      surveyInfo.name = "ν%%κΈΈλ23";
      const response = await request(app.getHttpServer())
        .post("/surveys")
        .send(surveyInfo);

      expect(response.statusCode).toBe(400);
    });

    it("μ ν¨νμ§ μμ μ΄λ©μΌμ΄λΌλ©΄, μνμ½λ 400μ λ°νν©λλ€.", async () => {
      surveyInfo.email = "fake@fakemail";
      const response = await request(app.getHttpServer())
        .post("/surveys")
        .send(surveyInfo);

      expect(response.statusCode).toBe(400);
    });

    it("κ΅­κ°μ½λκ° ν¬ν¨λμ§ μμ μ νλ²νΈλΌλ©΄, μνμ½λ 400μ λ°νν©λλ€.", async () => {
      surveyInfo.phoneNumber = "02555555";
      const response = await request(app.getHttpServer())
        .post("/surveys")
        .send(surveyInfo);

      expect(response.statusCode).toBe(400);
    });

    it("κ°μΈμ λ³΄ μμ§ λμλ₯Ό νμ§ μμΌλ©΄, μνμ½λ 400μ λ°νν©λλ€.", async () => {
      surveyInfo.agreement = false;
      const response = await request(app.getHttpServer())
        .post("/surveys")
        .send(surveyInfo);

      expect(response.statusCode).toBe(400);
    });
  });
});
