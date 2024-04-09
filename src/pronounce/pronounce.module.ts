import { Module } from '@nestjs/common';
import { PronounceService } from './pronounce.service';
import { PronounceController } from './pronounce.controller';
import { Pronounce } from './entities/pronounce.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pronounce])],
  controllers: [PronounceController],
  providers: [PronounceService],
  exports: [PronounceService],
})
export class PronounceModule {}
