import { getModelToken } from "@nestjs/mongoose";
import { Test, TestingModule } from "@nestjs/testing";
import { Survey } from "../schemas/survey.schema";
import { SurveyRepository } from "./survey.repository";

describe("SurveyRepository", () => {
  let repository: SurveyRepository;
  const surveyInfo = {
    name: "홍길동",
    email: "hong@gmail.com",
    phoneNumber: "+82105555555",
    agreement: true,
  };
  const mockSurveyModel = {
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SurveyRepository,
        {
          provide: getModelToken(Survey.name),
          useValue: mockSurveyModel,
        },
      ],
    })
      .overrideProvider(getModelToken(Survey.name))
      .useValue(mockSurveyModel)
      .compile();

    repository = module.get<SurveyRepository>(SurveyRepository);
  });

  it("설문지 레포지토리 확인합니다", async () => {
    expect(repository).toBeDefined();
  });
  it("레포지토리 함수(create) 확인합니다", async () => {
    expect(typeof repository.create).toBe("function");
  });
  it("MongoDB Model 함수(create)를 호출할 수 있습니다", async () => {
    await repository.create(surveyInfo);
    expect(mockSurveyModel.create).toBeCalledWith(surveyInfo);
  });
  it("설문지 작성 완료했습니다.", async () => {
    mockSurveyModel.create.mockReturnValue(surveyInfo);
    expect(await repository.create(surveyInfo)).toStrictEqual(surveyInfo);
  });
});
