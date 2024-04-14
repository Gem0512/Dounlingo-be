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
import { MultipleChoiceService } from './multiple-choice.service';
import { CreateMultipleChoiceDto } from './dto/create-multiple-choice.dto';
import { UpdateMultipleChoiceDto } from './dto/update-multiple-choice.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('multiple-choice')
export class MultipleChoiceController {
  constructor(private readonly multipleChoiceService: MultipleChoiceService) {}

  @Post()
  create(@Body() createMultipleChoiceDto: CreateMultipleChoiceDto) {
    return this.multipleChoiceService.create(createMultipleChoiceDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.multipleChoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.multipleChoiceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMultipleChoiceDto: UpdateMultipleChoiceDto,
  ) {
    return this.multipleChoiceService.update(+id, updateMultipleChoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.multipleChoiceService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/mark-as-done')
  async markAsDone(@Param('id') id: string) {
    const parsedId = parseInt(id, 10);
    const updatedMultipleChoice =
      await this.multipleChoiceService.markAsDone(parsedId);
    if (!updatedMultipleChoice) {
      return { message: 'Multiple choice not found' };
    }
    return updatedMultipleChoice;
  }

  @UseGuards(JwtAuthGuard)
  @Post('post-data')
  async createListening(
    @Body()
    body: {
      question: string;
      answer: { [key: string]: any[] };
      correctAnswer: string;
      explain: string;
      done: string;
    },
  ) {
    const listening = await this.multipleChoiceService.createListening(body);
    return listening;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getListeningAudio(@Param('id') id: number) {
    const listening = await this.multipleChoiceService.findListeningById(id);
    return listening;
  }
}
