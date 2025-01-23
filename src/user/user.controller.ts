import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/req/create-user.dto';
import { UpdateUserDto } from './dto/req/update-user.dto';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiQuery,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { ResponseUserDto } from './dto/res/response-user.dto';

@ApiTags('User_Module')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  @ApiCreatedResponse({ type: ResponseUserDto })
  @ApiConflictResponse({ description: 'Conflict' })
  @ApiUnprocessableEntityResponse({ description: 'Unprocessable entity' })
  @ApiForbiddenResponse({ description: 'Access denied' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
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
