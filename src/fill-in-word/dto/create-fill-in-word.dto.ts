import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFillInWordDto {
  // @ApiProperty({ type: 'string', format: 'binary' })
  @IsString()
  question: string;

  // @ApiProperty({ type: 'object' })
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
