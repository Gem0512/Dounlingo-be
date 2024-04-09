import { Test, TestingModule } from '@nestjs/testing';
import { PronounceService } from './pronounce.service';

describe('PronounceService', () => {
  let service: PronounceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PronounceService],
    }).compile();

    service = module.get<PronounceService>(PronounceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
