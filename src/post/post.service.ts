import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  public postList: any[] = [];
  create(createPostDto: PostDto) {
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

  update(id: number, updatePostDto: PostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
