// // user.controller.ts
// import { Body, Controller, Get, Post } from '@nestjs/common';
// import { UserService } from './user.service';
// import { User } from './user.entity';

// @Controller('user')
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Get('/getAll')
//   async findAll(): Promise<User[]> {
//     const users = await this.userService.findAll();
//     console.log('--all user---');
//     console.log(users); // In dữ liệu người dùng ra console
//     return users;
//   }

//   @Get('/getById:id')
//   async findOneById(id: number): Promise<User> {
//     const user = await this.userService.findOneById(id);
//     console.log('--user---');
//     console.log(user); // In dữ liệu người dùng ra console
//     return user;
//   }

//   @Post('/create')
//   async create(@Body() userData: User): Promise<User> {
//     return await this.userService.create(userData);
//   }
// }

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  show(@Param('id') id: string) {
    return this.usersService.showById(+id);
  }

  @Get('/getAll')
  async findAll(): Promise<User[]> {
    const users = await this.usersService.findAll();
    console.log('--all user---');
    console.log(users); // In dữ liệu người dùng ra console
    return users;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':userId/daily-goal')
  async updateDailyGoal(
    @Param('userId') userId: string,
    @Body('dailyGoal') dailyGoal: string,
  ) {
    return this.usersService.updateDailyGoal(parseInt(userId), dailyGoal);
  }

  // @Put(':id/result')
  // async updateResult(
  //   @Param('id') id: number,
  //   @Body() updateResultDto: UpdateResultDto,
  // ) {
  //   return this.usersService.updateResult(id, updateResultDto.result);
  // }

  @UseGuards(JwtAuthGuard)
  @Put(':id/result/:key')
  async updateSingleResult(
    @Param('id') id: number,
    @Param('key') key: string,
    @Body() value: any[],
  ) {
    return this.usersService.updateSingleResult(id, key, value);
  }
}
