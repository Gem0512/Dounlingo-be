import { Injectable } from '@nestjs/common';
import { CreateFillInWordDto } from './dto/create-fill-in-word.dto';
import { UpdateFillInWordDto } from './dto/update-fill-in-word.dto';
import { FillInWord } from './entities/fill-in-word.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FillInWordService {
  constructor(
    @InjectRepository(FillInWord)
    private readonly fillInWordRepository: Repository<FillInWord>,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createFillInWordDto: CreateFillInWordDto) {
    return 'This action adds a new fillInWord';
  }

  async findAll(): Promise<FillInWord[]> {
    return await FillInWord.find();
  }

  async markAsDone(id: number): Promise<FillInWord | undefined> {
    try {
      const fillInWord = await this.fillInWordRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!fillInWord) {
        return undefined; // Trả về undefined nếu không tìm thấy bản ghi với id đã cung cấp
      }
      fillInWord.done = 'true'; // Đặt trường done thành true
      await this.fillInWordRepository.save(fillInWord); // Lưu thay đổi vào cơ sở dữ liệu

      return fillInWord; // Trả về bản ghi đã được cập nhật
    } catch (error) {
      console.error('Error occurred while marking as done:', error);
      throw error;
    }
  }

  async findFillInWordById(id: number): Promise<FillInWord> {
    return await this.fillInWordRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async createFillInWord(
    createFillInWordDto: CreateFillInWordDto,
  ): Promise<FillInWord> {
    const { question, correctAnswer, explain, done } = createFillInWordDto;

    // Upload audio to Cloudinary and get URL

    // Create a new Listening entity with the audio URL
    const fillInWord = new FillInWord();
    fillInWord.question = question;
    fillInWord.correctAnswer = correctAnswer;
    fillInWord.explain = explain;
    fillInWord.done = done;

    // Save the Listening entity to the database
    return this.fillInWordRepository.save(fillInWord);
  }

  findOne(id: number) {
    return `This action returns a #${id} fillInWord`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateFillInWordDto: UpdateFillInWordDto) {
    return `This action updates a #${id} fillInWord`;
  }

  remove(id: number) {
    return `This action removes a #${id} fillInWord`;
  }
}
