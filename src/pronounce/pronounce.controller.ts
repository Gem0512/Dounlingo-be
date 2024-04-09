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
import { PronounceService } from './pronounce.service';
import { CreatePronounceDto } from './dto/create-pronounce.dto';
import { UpdatePronounceDto } from './dto/update-pronounce.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('pronounce')
export class PronounceController {
  constructor(private readonly pronounceService: PronounceService) {}

  @Post()
  create(@Body() createPronounceDto: CreatePronounceDto) {
    return this.pronounceService.create(createPronounceDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.pronounceService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/mark-as-done')
  async markAsDone(@Param('id') id: string) {
    const parsedId = parseInt(id, 10);
    const updatedPronounce = await this.pronounceService.markAsDone(parsedId);
    if (!updatedPronounce) {
      return { message: 'Multiple choice not found' }; // Trả về thông báo nếu không tìm thấy bản ghi
    }
    return updatedPronounce;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pronounceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePronounceDto: UpdatePronounceDto,
  ) {
    return this.pronounceService.update(+id, updatePronounceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pronounceService.remove(+id);
  }
}
