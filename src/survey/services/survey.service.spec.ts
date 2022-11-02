import { Test, TestingModule } from "@nestjs/testing";
import { SurveyRepository } from "../repositories/survey.repository";
import { SurveyService } from "./survey.service";

describe("SurveyService", () => {
  let service: SurveyService;
  const surveyInfo = {
    name: "홍길동",
    email: "hong@gmail.com",
    phoneNumber: "+82105555555",
    agreement: true,
  };
  const mockRepository = {
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SurveyService,
        {
          provide: SurveyRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<SurveyService>(SurveyService);
  });

  it("설문지 서비스 확인합니다", async () => {
    expect(service).toBeDefined();
  });
  it("서비스 함수(create) 확인합니다", async () => {
    expect(typeof service.create).toBe("function");
  });
  it("설문지 레포지토리의 함수(create)를 호출할 수 있습니다", async () => {
    await service.create(surveyInfo);
    expect(mockRepository.create).toBeCalledWith(surveyInfo);
  });
  it("설문지 작성 완료했습니다.", async () => {
    mockRepository.create.mockReturnValue(surveyInfo);
    expect(await service.create(surveyInfo)).toStrictEqual(surveyInfo);
  });
  it("개인정보 수집 동의를 하지 않으면 에러를 반환합니다", async () => {
    surveyInfo.agreement = false;
    await expect(service.create(surveyInfo)).rejects.toThrow();
  });
  it("이름이 문자가 아니라면 에러를 반환합니다", async () => {
    surveyInfo.agreement = true;
    surveyInfo.name = "홍$$동";
    await expect(service.create(surveyInfo)).rejects.toThrow();
  });
});
