import { PartialType } from '@nestjs/mapped-types';
import { CreateWordArrangementDto } from './create-word-arrangement.dto';

export class UpdateWordArrangementDto extends PartialType(CreateWordArrangementDto) {}
