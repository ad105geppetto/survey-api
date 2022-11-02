import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from "class-validator";

export class SurveyInfoDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  readonly phoneNumber: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly agreement: boolean;
}
