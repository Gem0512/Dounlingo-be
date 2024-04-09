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
import { WordArrangementService } from './word-arrangement.service';
import { CreateWordArrangementDto } from './dto/create-word-arrangement.dto';
import { UpdateWordArrangementDto } from './dto/update-word-arrangement.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('word-arrangement')
export class WordArrangementController {
  constructor(
    private readonly wordArrangementService: WordArrangementService,
  ) {}

  @Post()
  create(@Body() createWordArrangementDto: CreateWordArrangementDto) {
    return this.wordArrangementService.create(createWordArrangementDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.wordArrangementService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/mark-as-done')
  async markAsDone(@Param('id') id: string) {
    const parsedId = parseInt(id, 10);
    const updatedWordArrangement =
      await this.wordArrangementService.markAsDone(parsedId);
    if (!updatedWordArrangement) {
      return { message: 'Multiple choice not found' }; // Trả về thông báo nếu không tìm thấy bản ghi
    }
    return updatedWordArrangement;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wordArrangementService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWordArrangementDto: UpdateWordArrangementDto,
  ) {
    return this.wordArrangementService.update(+id, updateWordArrangementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wordArrangementService.remove(+id);
  }
}
