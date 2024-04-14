import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FillInWordService } from './fill-in-word.service';
import { CreateFillInWordDto } from './dto/create-fill-in-word.dto';
import { UpdateFillInWordDto } from './dto/update-fill-in-word.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('fill-in-word')
export class FillInWordController {
  constructor(private readonly fillInWordService: FillInWordService) {}

  @Post()
  create(@Body() createFillInWordDto: CreateFillInWordDto) {
    return this.fillInWordService.create(createFillInWordDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.fillInWordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fillInWordService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFillInWordDto: UpdateFillInWordDto,
  ) {
    return this.fillInWordService.update(+id, updateFillInWordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fillInWordService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/mark-as-done')
  async markAsDone(@Param('id') id: string) {
    const parsedId = parseInt(id, 10);
    const updatedFillInWord = await this.fillInWordService.markAsDone(parsedId);
    if (!updatedFillInWord) {
      return { message: 'Multiple choice not found' }; // Trả về thông báo nếu không tìm thấy bản ghi
    }
    return updatedFillInWord;
  }

  @UseGuards(JwtAuthGuard)
  @Post('post-fillInWord')
  async createListening(
    @Body()
    body: {
      question: string;
      correctAnswer: string;
      explain: string;
      done: string;
    },
  ) {
    const listening = await this.fillInWordService.createFillInWord(body);
    if (listening) {
      console.log('Post fill in word success!');
      console.log(listening);
    }
    return listening;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/audio')
  async getListeningAudio(@Param('id') id: number) {
    const listening = await this.fillInWordService.findFillInWordById(id);
    return listening;
  }
}
