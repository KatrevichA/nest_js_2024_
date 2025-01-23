import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/req/create-post.dto';
import { UpdatePostDto } from './dto/req/update-post.dto';

@Injectable()
export class PostService {
  public postList: any[] = [];
  create(createPostDto: CreatePostDto) {
    const index = new Date().valueOf();
    this.postList.push({
      ...createPostDto,
      id: index,
    });
    return this.postList[0];
  }

  findAll() {
    return this.postList;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
