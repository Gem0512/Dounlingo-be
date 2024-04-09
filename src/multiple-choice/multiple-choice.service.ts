import { Injectable } from '@nestjs/common';
import { CreateMultipleChoiceDto } from './dto/create-multiple-choice.dto';
import { UpdateMultipleChoiceDto } from './dto/update-multiple-choice.dto';
import { MultipleChoice } from './entities/multiple-choice.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MultipleChoiceService {
  constructor(
    @InjectRepository(MultipleChoice)
    private readonly multipleChoiceRepository: Repository<MultipleChoice>,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createMultipleChoiceDto: CreateMultipleChoiceDto) {
    return 'This action adds a new multipleChoice';
  }

  async findAll(): Promise<MultipleChoice[]> {
    return await MultipleChoice.find();
  }

  async markAsDone(id: number): Promise<MultipleChoice | undefined> {
    try {
      const multipleChoice = await this.multipleChoiceRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!multipleChoice) {
        return undefined; // Trả về undefined nếu không tìm thấy bản ghi với id đã cung cấp
      }
      multipleChoice.done = 'true'; // Đặt trường done thành true
      await this.multipleChoiceRepository.save(multipleChoice); // Lưu thay đổi vào cơ sở dữ liệu

      return multipleChoice; // Trả về bản ghi đã được cập nhật
    } catch (error) {
      console.error('Error occurred while marking as done:', error);
      throw error;
    }
  }

  async findListeningById(id: number): Promise<MultipleChoice> {
    return await this.multipleChoiceRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async createListening(
    createMultipleChoiceDto: CreateMultipleChoiceDto,
  ): Promise<MultipleChoice> {
    const { question, answer, correctAnswer, explain, done } =
      createMultipleChoiceDto;

    // Upload audio to Cloudinary and get URL

    // Create a new Listening entity with the audio URL
    const multipleChoice = new MultipleChoice();
    multipleChoice.question = question;
    multipleChoice.answer = answer;
    multipleChoice.correctAnswer = correctAnswer;
    multipleChoice.explain = explain;
    multipleChoice.done = done;

    // Save the Listening entity to the database
    return this.multipleChoiceRepository.save(multipleChoice);
  }

  findOne(id: number) {
    return `This action returns a #${id} multipleChoice`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateMultipleChoiceDto: UpdateMultipleChoiceDto) {
    return `This action updates a #${id} multipleChoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} multipleChoice`;
  }
}
