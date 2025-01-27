import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, UserItemDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiConflictResponse,
  ApiCreatedResponse, ApiExtraModels,
  ApiForbiddenResponse,
  ApiQuery,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { BaseQueryDto } from '../common/validator/base.query.validator';
import { ApiPaginatedResponse, PaginatedDto } from '../common/interface/response.interface';


@ApiTags('User_Module')
@ApiExtraModels(UserItemDto, PaginatedDto)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  @ApiCreatedResponse({ type: UserDto })
  @ApiConflictResponse({ description: 'Conflict' })
  @ApiUnprocessableEntityResponse({ description: 'Unprocessable entity' })
  @ApiForbiddenResponse({ description: 'Access denied' })
  create(@Body() createUserDto: UserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/list')
  @ApiPaginatedResponse('entities', UserItemDto)
  findAll(@Query() query:BaseQueryDto) {
    return this.userService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
