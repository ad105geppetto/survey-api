import { Module } from "@nestjs/common";
import { SurveyModule } from "./survey/survey.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@test.81mvvlc.mongodb.net/${process.env.MONGO_NAME}?retryWrites=true&w=majority`,
      }),
    }),
    SurveyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
