import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CatDocument = Survey & Document;

@Schema({ versionKey: false })
export class Survey {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  agreement: boolean;
}

export const SurveySchema = SchemaFactory.createForClass(Survey);
