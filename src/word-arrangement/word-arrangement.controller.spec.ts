import { Test, TestingModule } from '@nestjs/testing';
import { WordArrangementController } from './word-arrangement.controller';
import { WordArrangementService } from './word-arrangement.service';

describe('WordArrangementController', () => {
  let controller: WordArrangementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WordArrangementController],
      providers: [WordArrangementService],
    }).compile();

    controller = module.get<WordArrangementController>(
      WordArrangementController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
