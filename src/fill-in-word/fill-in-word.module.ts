import { Module } from '@nestjs/common';
import { FillInWordService } from './fill-in-word.service';
import { FillInWordController } from './fill-in-word.controller';
import { FillInWord } from './entities/fill-in-word.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FillInWord])],
  controllers: [FillInWordController],
  providers: [FillInWordService],
  exports: [FillInWordService],
})
export class FillInWordModule {}
