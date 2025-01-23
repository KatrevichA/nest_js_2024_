import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsCityAllowed } from '../../../common/decorator/city.decorator';

export class CreateUserDto {
  @IsOptional()
  @ApiProperty({
    description: 'Create a new user',
    example: 'Stesha',
    required: false,
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'Create a unique email',
    default: 'Stesha@gmail.com',
  })
  email: string;

  @ApiProperty()
  password: string;

  @IsOptional()
  @IsCityAllowed({
    groups: ['Lviv', 'Odessa', 'Kharkiv'],
    message: 'City is not allowed',
  })
  city: string;
}
