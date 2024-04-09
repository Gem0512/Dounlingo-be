import { Module } from '@nestjs/common';
import { WordArrangementService } from './word-arrangement.service';
import { WordArrangementController } from './word-arrangement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WordArrangement } from './entities/word-arrangement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WordArrangement])],
  controllers: [WordArrangementController],
  providers: [WordArrangementService],
  exports: [WordArrangementService],
})
export class WordArrangementModule {}
