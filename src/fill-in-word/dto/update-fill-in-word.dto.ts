import { PartialType } from '@nestjs/mapped-types';
import { CreateFillInWordDto } from './create-fill-in-word.dto';
export class UpdateFillInWordDto extends PartialType(CreateFillInWordDto) {}
