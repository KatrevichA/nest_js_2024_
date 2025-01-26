import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseQueryDto } from '../common/validator/base.query.validator';

@Injectable()
export class UserService {
  public usersList: any[] = [];
  create(createUserDto: UserDto) {
    const index = new Date().valueOf();
    this.usersList.push({
      ...createUserDto,
      id: index,
    });
    return this.usersList[0];
  }

  async findAll(query?: BaseQueryDto) {
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
