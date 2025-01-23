import { ApiProperty } from '@nestjs/swagger';

export class ResponseUserDto {
  @ApiProperty()
  id?: string;

  @ApiProperty({
    description: 'Create a new user',
    example: 'Stesha',
    required: false,
  })
  name: string;

  lastName?: string;

  @ApiProperty({
    description: 'Create a unique email',
    default: 'Stesha@gmail.com',
  })
  email?: string;

  phoneNumber?: string;
}
