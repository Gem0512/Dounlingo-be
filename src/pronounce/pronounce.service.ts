import { Injectable } from '@nestjs/common';
import { CreatePronounceDto } from './dto/create-pronounce.dto';
import { UpdatePronounceDto } from './dto/update-pronounce.dto';
import { Pronounce } from './entities/pronounce.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PronounceService {
  constructor(
    @InjectRepository(Pronounce)
    private readonly pronounceRepository: Repository<Pronounce>,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createPronounceDto: CreatePronounceDto) {
    return 'This action adds a new pronounce';
  }

  async findAll(): Promise<Pronounce[]> {
    return await Pronounce.find();
  }

  // async markAsDone(id: number): Promise<Pronounce | undefined> {
  //   try {
  //     const pronounce = await this.pronounceRepository.findOne({
  //       where: {
  //         id: id,
  //       },
  //     });
  //     if (!pronounce) {
  //       return undefined; // Trả về undefined nếu không tìm thấy bản ghi với id đã cung cấp
  //     }
  //     pronounce.done = 'true'; // Đặt trường done thành true
  //     await this.pronounceRepository.save(pronounce); // Lưu thay đổi vào cơ sở dữ liệu

  //     return pronounce; // Trả về bản ghi đã được cập nhật
  //   } catch (error) {
  //     console.error('Error occurred while marking as done:', error);
  //     throw error;
  //   }
  // }

  findOne(id: number) {
    return `This action returns a #${id} pronounce`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updatePronounceDto: UpdatePronounceDto) {
    return `This action updates a #${id} pronounce`;
  }

  remove(id: number) {
    return `This action removes a #${id} pronounce`;
  }
}
