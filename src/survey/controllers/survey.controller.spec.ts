import { Test, TestingModule } from "@nestjs/testing";
import { SurveyService } from "../services/survey.service";
import { SurveyController } from "./survey.controller";

describe("SurveyController", () => {
  let controller: SurveyController;
  const surveyInfo = {
    name: "홍길동",
    email: "hong@gmail.com",
    phoneNumber: "+82105555555",
    agreement: true,
  };
  const mockService = {
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyController],
      providers: [SurveyService],
    })
      .overrideProvider(SurveyService)
      .useValue(mockService)
      .compile();

    controller = module.get<SurveyController>(SurveyController);
  });

  it("설문지 컨트롤러 확인합니다", () => {
    expect(controller).toBeDefined();
  });
  it("컨트롤러 함수(create) 확인합니다", () => {
    expect(typeof controller.create).toBe("function");
  });
  it("설문지 서비스의 함수(create)를 호출할 수 있습니다", async () => {
    await controller.create(surveyInfo);
    expect(mockService.create).toBeCalledWith(surveyInfo);
  });
  it("설문지 작성 완료했습니다.", async () => {
    mockService.create.mockReturnValue(surveyInfo);
    expect(await controller.create(surveyInfo)).toStrictEqual(surveyInfo);
  });
});
