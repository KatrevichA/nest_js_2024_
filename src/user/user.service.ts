import { Injectable } from '@nestjs/common';
import { UserDto, UserItemDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseQueryDto } from '../common/validator/base.query.validator';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { paginateRawAndEntities } from 'nestjs-typeorm-paginate';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: UserDto) {
    return `This action create user`;
  }

  async findAll(query?: BaseQueryDto) {
    const options = {
      page: query?.page || 1,
      limit: query?.limit || 5,
    };
    const queryBuilder = await this.userRepository.createQueryBuilder('user');
    queryBuilder
      .select('email, "firstName", age, id, "createdAt"')
      .where({ isActive: false });

    if (query.search) {
        queryBuilder.andWhere(`LOWER("firstName") LIKE '%${query.search}%'`);
    }

    const [pagination, rawEntities] = await paginateRawAndEntities(
      queryBuilder,
      options,
    );

    return {
      page: pagination.meta.currentPage,
      pages: pagination.meta.totalPages,
      countItems: pagination.meta.totalItems,
      entities: rawEntities as [UserItemDto],
    };
  }

  findOne(id: number) {
    return `This action findOne a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
