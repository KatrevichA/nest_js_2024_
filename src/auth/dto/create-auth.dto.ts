import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { Match } from '../../common/decorator/password.decorator';

export class CreateAuthDto {}
export class ForgotPassword {
  @IsString()
  // @IsStrongPassword()
  @Matches(/^\S*(?=\S{8,})(?=\S*[A-Z])(?=\S*[\d])\S*$/, {
    message: 'Password must have 1 upper case',
  })
  password: string;

  @IsNotEmpty()
  @Match('password', { message: 'Password must match' })
  repeatPassword: string;
}
