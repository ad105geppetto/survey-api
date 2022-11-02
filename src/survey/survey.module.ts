import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SurveyController } from "./controllers/survey.controller";
import { SurveyRepository } from "./repositories/survey.repository";
import { Survey, SurveySchema } from "./schemas/survey.schema";
import { SurveyService } from "./services/survey.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Survey.name, schema: SurveySchema }]),
  ],
  controllers: [SurveyController],
  providers: [SurveyService, SurveyRepository],
})
export class SurveyModule {}
