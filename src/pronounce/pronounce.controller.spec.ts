import { Test, TestingModule } from '@nestjs/testing';
import { PronounceController } from './pronounce.controller';
import { PronounceService } from './pronounce.service';

describe('PronounceController', () => {
  let controller: PronounceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PronounceController],
      providers: [PronounceService],
    }).compile();

    controller = module.get<PronounceController>(PronounceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
