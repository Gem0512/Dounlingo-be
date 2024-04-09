import { Module } from '@nestjs/common';
import { MultipleChoiceService } from './multiple-choice.service';
import { MultipleChoiceController } from './multiple-choice.controller';
import { MultipleChoice } from './entities/multiple-choice.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MultipleChoice])],
  controllers: [MultipleChoiceController],
  providers: [MultipleChoiceService],
  exports: [MultipleChoiceService],
})
export class MultipleChoiceModule {}
