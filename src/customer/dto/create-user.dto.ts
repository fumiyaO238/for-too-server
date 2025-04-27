import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEmail,
  IsDateString,
} from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  firstNameKana: string;

  @IsNotEmpty()
  @IsString()
  lastNameKana: string;

  @IsOptional()
  @IsDateString()
  birthday?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsNotEmpty()
  @IsString()
  tel: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  line?: string;

  @IsOptional()
  @IsString()
  instagram?: string;
}
