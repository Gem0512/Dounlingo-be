import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // const hashedPassword = hashSync(createUserDto.password, genSaltSync(10)); // Hash mật khẩu trước khi lưu vào cơ sở dữ liệu
    const user = await User.create({
      email: createUserDto.email,
      username: createUserDto.username,
      password: createUserDto.password,
    }).save(); // Lưu người dùng vào cơ sở dữ liệu và trả về thông tin người dùng đã được lưu

    return user;
  }

  async showById(id: number): Promise<User> {
    const user = await this.findById(id);

    delete user.password;
    console.log('user by id');
    console.log(user);
    return user;
  }

  async updateDailyGoal(userId: number, dailyGoal: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    }); // Sửa dòng này
    if (!user) {
      throw new Error('User not found');
    }
    user.dailyGoal = dailyGoal; // Gán giá trị chuỗi cho trường dailyGoal
    return this.userRepository.save(user);
  }

  async updateLanguage(userId: number, language: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    }); // Sửa dòng này
    if (!user) {
      throw new Error('User not found');
    }
    user.language = language; // Gán giá trị chuỗi cho trường dailyGoal
    return this.userRepository.save(user);
  }

  // async updateResult(
  //   userId: number,
  //   result: { [key: string]: any[] },
  // ): Promise<User> {
  //   const user = await this.userRepository.findOne({
  //     where: {
  //       id: userId,
  //     },
  //   });
  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }
  //   user.result = result;
  //   return this.userRepository.save(user);
  // }

  async updateSingleResult(
    userId: number,
    key: string,
    value: any[],
  ): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!user.result) {
      user.result = {};
    }

    // Kiểm tra xem khóa có tồn tại không
    if (!user.result[key]) {
      user.result[key] = [];
    }

    // Thêm giá trị mới vào mảng
    user.result[key].push(...value);
    console.log(user);

    return this.userRepository.save(user);
  }

  async findById(id: number) {
    return await User.findOne({
      where: {
        id: id,
      },
    });
  }

  async findByEmail(email: string) {
    return await User.findOne({
      where: {
        email: email,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return await User.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
