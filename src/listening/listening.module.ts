import { Module } from '@nestjs/common';
import { ListeningService } from './listening.service';
import { ListeningController } from './listening.controller';
import { Listening } from './entities/listening.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Listening])],
  controllers: [ListeningController],
  providers: [ListeningService],
  exports: [ListeningService],
})
export class ListeningModule {}
