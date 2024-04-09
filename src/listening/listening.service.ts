import { Injectable } from '@nestjs/common';
import { CreateListeningDto } from './dto/create-listening.dto';
import { UpdateListeningDto } from './dto/update-listening.dto';
import { Listening } from './entities/listening.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as cloudinary from 'cloudinary';

@Injectable()
export class ListeningService {
  constructor(
    @InjectRepository(Listening)
    private readonly listeningRepository: Repository<Listening>,
  ) {
    cloudinary.v2.config({
      cloud_name: 'YOUR_CLOUD_NAME',
      api_key: 'YOUR_API_KEY',
      api_secret: 'YOUR_API_SECRET',
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createListeningDto: CreateListeningDto) {
    return 'This action adds a new listening';
  }

  async findAll(): Promise<Listening[]> {
    return await Listening.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} listening`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateListeningDto: UpdateListeningDto) {
    return `This action updates a #${id} listening`;
  }

  remove(id: number) {
    return `This action removes a #${id} listening`;
  }

  async markAsDone(id: number): Promise<Listening | undefined> {
    try {
      const listening = await this.listeningRepository.findOne({
        where: {
          id: id,
        },
      });
      if (!listening) {
        return undefined; // Trả về undefined nếu không tìm thấy bản ghi với id đã cung cấp
      }
      listening.done = 'true'; // Đặt trường done thành true
      await this.listeningRepository.save(listening); // Lưu thay đổi vào cơ sở dữ liệu

      return listening; // Trả về bản ghi đã được cập nhật
    } catch (error) {
      console.error('Error occurred while marking as done:', error);
      throw error;
    }
  }

  // async createListening(
  //   audio: Buffer,
  //   questions: { [key: string]: any[] },
  //   paragraphTa: string,
  //   paragraphTv: string,
  //   done: string,
  // ): Promise<Listening> {
  //   const listening = new Listening();
  //   // const base64Audio = audio.toString('base64');
  //   listening.audio = audio;
  //   listening.questions = questions;
  //   listening.paragraphTa = paragraphTa;
  //   listening.paragraphTv = paragraphTv;
  //   listening.done = done;
  //   return await this.listeningRepository.save(listening);
  // }

  async findListeningById(id: number): Promise<Listening> {
    return await this.listeningRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async createListening(
    createListeningDto: CreateListeningDto,
  ): Promise<Listening> {
    const { audio, questions, paragraphTa, paragraphTv, done } =
      createListeningDto;

    // Upload audio to Cloudinary and get URL

    // Create a new Listening entity with the audio URL
    const listening = new Listening();
    listening.audio = audio;
    listening.questions = questions;
    listening.paragraphTa = paragraphTa;
    listening.paragraphTv = paragraphTv;
    listening.done = done;

    // Save the Listening entity to the database
    return this.listeningRepository.save(listening);
  }

  // async uploadAudioAndGetUrl(audio: MulterFile): Promise<string> {
  //   // Sử dụng cloudinary.v2 để tải lên audio và lấy URL
  //   const result = await cloudinary.v2.uploader.upload(audio.path, {
  //     resource_type: 'auto',
  //   });
  //   return result.secure_url;
  // }

  // async saveAudioAndGetUrl(audioFile: MulterFile): Promise<string> {
  //   const uploadDir = path.join(__dirname, '..', 'uploads');
  //   await fs.mkdir(uploadDir, { recursive: true });

  //   const audioFileName = uuidv4() + path.extname(audioFile.originalname);
  //   const audioFilePath = path.join(uploadDir, audioFileName);

  //   try {
  //     await fs.writeFile(audioFilePath, audioFile.buffer);
  //   } catch (error) {
  //     throw new BadRequestException('Error saving audio file');
  //   }

  //   const audioUrl = `/uploads/${audioFileName}`;
  //   return audioUrl;
  // }
}
