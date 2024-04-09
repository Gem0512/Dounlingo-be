import { Test, TestingModule } from '@nestjs/testing';
import { WordArrangementService } from './word-arrangement.service';

describe('WordArrangementService', () => {
  let service: WordArrangementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WordArrangementService],
    }).compile();

    service = module.get<WordArrangementService>(WordArrangementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
