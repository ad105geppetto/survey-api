import { Body, Controller, Post } from "@nestjs/common";
import { SurveyInfoDTO } from "../dto/surveyInfo.dto";
import { SurveyService } from "../services/survey.service";

@Controller("surveys")
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  async create(@Body() surveyInfo: SurveyInfoDTO) {
    const data = await this.surveyService.create(surveyInfo);
    return data;
  }
}
