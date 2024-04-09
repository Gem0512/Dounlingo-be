import { Test, TestingModule } from '@nestjs/testing';
import { MultipleChoiceController } from './multiple-choice.controller';
import { MultipleChoiceService } from './multiple-choice.service';

describe('MultipleChoiceController', () => {
  let controller: MultipleChoiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MultipleChoiceController],
      providers: [MultipleChoiceService],
    }).compile();

    controller = module.get<MultipleChoiceController>(MultipleChoiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
