import { BadRequestException, Injectable } from "@nestjs/common";
import { SurveyInfoDTO } from "../dto/surveyInfo.dto";
import { SurveyRepository } from "../repositories/survey.repository";

@Injectable()
export class SurveyService {
  constructor(private readonly surveyRepository: SurveyRepository) {}

  async create(surveyInfo: SurveyInfoDTO) {
    const numberCheck = /[0-9]/;
    const specialCheck = /[`~!@#$%^&*()-+=|\\\'\";:\/?<>]/gi;
    const { name, agreement } = surveyInfo;

    if (!agreement) {
      throw new BadRequestException({
        message: "개인정보 수집에 동의해주셔야 합니다.",
      });
    }

    if (numberCheck.test(name) || specialCheck.test(name)) {
      throw new BadRequestException({
        message: "이름은 문자만 가능합니다.",
      });
    }

    const data = await this.surveyRepository.create(surveyInfo);

    return data;
  }
}
