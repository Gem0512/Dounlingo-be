import { Injectable } from '@nestjs/common';
import { CreateWordArrangementDto } from './dto/create-word-arrangement.dto';
import { UpdateWordArrangementDto } from './dto/update-word-arrangement.dto';
import { WordArrangement } from './entities/word-arrangement.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WordArrangementService {
  constructor(
    @InjectRepository(WordArrangement)
    private readonly wordArrangementRepository: Repository<WordArrangement>,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createWordArrangementDto: CreateWordArrangementDto) {
    return 'This action adds a new wordArrangement';
  }

  async findAll(): Promise<WordArrangement[]> {
    return await WordArrangement.find();
  }

  async markAsDone(id: number): Promise<WordArrangement | undefined> {
    try {
      const wordArrangement = await this.wordArrangementRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!wordArrangement) {
        return undefined; // Trả về undefined nếu không tìm thấy bản ghi với id đã cung cấp
      }
      wordArrangement.done = 'true'; // Đặt trường done thành true
      await this.wordArrangementRepository.save(wordArrangement); // Lưu thay đổi vào cơ sở dữ liệu

      return wordArrangement; // Trả về bản ghi đã được cập nhật
    } catch (error) {
      console.error('Error occurred while marking as done:', error);
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} wordArrangement`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateWordArrangementDto: UpdateWordArrangementDto) {
    return `This action updates a #${id} wordArrangement`;
  }

  remove(id: number) {
    return `This action removes a #${id} wordArrangement`;
  }
}
