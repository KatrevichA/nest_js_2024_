import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { Match } from '../../common/decorator/password.decorator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateAuthDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'Create a unique email',
    default: 'Stesha@gmail.com',
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;

  @Type(() => Date)
  @IsOptional()
  date: string;
}

export class ForgotPassword {
  @IsString()
  // @IsStrongPassword()
  @Matches(/^\S*(?=\S{8,})(?=\S*[A-Z])(?=\S*[\d])\S*$/, {
    message: 'Password must have 1 upper case',
  })
  password: string;

  @IsNotEmpty()
  @Match('password', { message: 'Password must match' })
  repeatPassword: string;
}
