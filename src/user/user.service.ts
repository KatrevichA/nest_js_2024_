import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/req/create-user.dto';
import { UpdateUserDto } from './dto/req/update-user.dto';

@Injectable()
export class UserService {
  public usersList: any[] = [];
  create(createUserDto: CreateUserDto) {
    const index = new Date().valueOf();
    this.usersList.push({
      ...createUserDto,
      id: index,
    });
    return this.usersList[0];
  }

  findAll() {
    return this.usersList;
  }

  findOne(id: number) {
    return this.usersList.find((user) => user.id == id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
