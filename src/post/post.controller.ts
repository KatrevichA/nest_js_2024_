import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/req/create-post.dto';
import { UpdatePostDto } from './dto/req/update-post.dto';
import { ApiConflictResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { ResponsePostDto } from './dto/res/response-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiCreatedResponse({ type: ResponsePostDto })
  @ApiConflictResponse({ description: 'Conflict' })
  @Post('/create')
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
