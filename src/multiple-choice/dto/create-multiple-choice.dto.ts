// create-listening.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMultipleChoiceDto {
  // @ApiProperty({ type: 'string', format: 'binary' })
  @IsNotEmpty()
  @IsString()
  question: string;

  // @ApiProperty({ type: 'object' })
  @IsNotEmpty()
  @IsString()
  answer: { [key: string]: any[] };

  // @ApiProperty()
  @IsNotEmpty()
  @IsString()
  correctAnswer: string;

  // @ApiProperty()
  @IsNotEmpty()
  @IsString()
  explain: string;

  // @ApiProperty()
  @IsNotEmpty()
  @IsString()
  done: string;
}
