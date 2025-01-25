import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { IsCityAllowed } from '../../../common/decorator/city.decorator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @Transform(({ value }) => value.trim())
  @IsOptional()
  @ApiProperty({
    description: 'Create a new user',
    example: 'Stesha',
    required: false,
  })
  name: string;

  @IsOptional()
  @IsCityAllowed({
    groups: ['Lviv', 'Odessa', 'Kharkiv'],
    message: 'City is not allowed',
  })
  @ApiProperty({ example: 'Lviv' })
  city: string;

  @IsNumber()
  age: number;
}
