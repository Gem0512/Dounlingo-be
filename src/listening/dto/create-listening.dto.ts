// create-listening.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateListeningDto {
  // @ApiProperty({ type: 'string', format: 'binary' })
  @IsString()
  audio: string;

  // @ApiProperty({ type: 'object' })
  @IsString()
  questions: { [key: string]: any[] };

  // @ApiProperty()
  @IsNotEmpty()
  @IsString()
  paragraphTa: string;

  // @ApiProperty()
  @IsNotEmpty()
  @IsString()
  paragraphTv: string;

  // @ApiProperty()
  @IsNotEmpty()
  @IsString()
  done: string;
}
