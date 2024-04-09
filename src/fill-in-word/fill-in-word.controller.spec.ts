import { Test, TestingModule } from '@nestjs/testing';
import { FillInWordController } from './fill-in-word.controller';
import { FillInWordService } from './fill-in-word.service';

describe('FillInWordController', () => {
  let controller: FillInWordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FillInWordController],
      providers: [FillInWordService],
    }).compile();

    controller = module.get<FillInWordController>(FillInWordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
