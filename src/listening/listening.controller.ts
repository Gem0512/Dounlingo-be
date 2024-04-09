import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ListeningService } from './listening.service';
import { CreateListeningDto } from './dto/create-listening.dto';
import { UpdateListeningDto } from './dto/update-listening.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('listening')
export class ListeningController {
  constructor(private readonly listeningService: ListeningService) {}

  @Post()
  create(@Body() createListeningDto: CreateListeningDto) {
    return this.listeningService.create(createListeningDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.listeningService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listeningService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateListeningDto: UpdateListeningDto,
  ) {
    return this.listeningService.update(+id, updateListeningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listeningService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/mark-as-done')
  async markAsDone(@Param('id') id: string) {
    const parsedId = parseInt(id, 10);
    const updatedListening = await this.listeningService.markAsDone(parsedId);
    if (!updatedListening) {
      return { message: 'Multiple choice not found' }; // Trả về thông báo nếu không tìm thấy bản ghi
    }
    return updatedListening;
  }

  // @Post()
  // @UseInterceptors(FileInterceptor('audio'))
  // async createListening(
  //   @UploadedFile() audioFile: MulterFile,
  // ): Promise<Listening> {
  //   const audioUrl = await this.listeningService.saveAudioAndGetUrl(audioFile);

  //   const listening = new Listening();
  //   listening.audio = audioUrl;
  //   // Các trường khác của đối tượng Listening có thể được thiết lập ở đây

  //   // Lưu đối tượng vào database
  //   return await listening.save();
  // }

  @UseGuards(JwtAuthGuard)
  @Post('post-audio')
  @UseInterceptors(FileInterceptor('audio'))
  async createListening(
    @Body()
    body: {
      questions: { [key: string]: any[] };
      audio: string;
      paragraphTa: string;
      paragraphTv: string;
      done: string;
    },
  ) {
    const listening = await this.listeningService.createListening(body);
    return listening;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/audio')
  async getListeningAudio(@Param('id') id: number) {
    const listening = await this.listeningService.findListeningById(id);
    return listening;
  }
}
