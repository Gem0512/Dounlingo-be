import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthLoginDto {
  id: number;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
