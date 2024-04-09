import { Test, TestingModule } from '@nestjs/testing';
import { FillInWordService } from './fill-in-word.service';

describe('FillInWordService', () => {
  let service: FillInWordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FillInWordService],
    }).compile();

    service = module.get<FillInWordService>(FillInWordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
