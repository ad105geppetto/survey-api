import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SurveyInfoDTO } from "../dto/surveyInfo.dto";
import { Survey } from "../schemas/survey.schema";

@Injectable()
export class SurveyRepository {
  constructor(
    @InjectModel(Survey.name) private readonly surveyModel: Model<Survey>,
  ) {}
  async create(surveyInfo: SurveyInfoDTO) {
    const data = await this.surveyModel.create(surveyInfo);

    return data;
  }
}
