import { PartialType } from '@nestjs/mapped-types';
import { CreatePronounceDto } from './create-pronounce.dto';

export class UpdatePronounceDto extends PartialType(CreatePronounceDto) {}
