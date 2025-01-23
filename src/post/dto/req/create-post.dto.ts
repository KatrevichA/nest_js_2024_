import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ required: true, description: 'Wrote a title' })
  title: string;
  @ApiProperty({ required: false, description: 'Wrote a description' })
  body: string;
  @ApiProperty({ required: true })
  userId: string;
}
