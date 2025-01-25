import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from '../req/create-user.dto';

export class ResponseUserDto extends CreateUserDto {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  status: boolean;
}
