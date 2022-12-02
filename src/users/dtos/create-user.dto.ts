import { IsEmail, IsNotEmpty, IsMobilePhone, IsEnum } from 'class-validator';

export enum USER_TYPE {
  'staff' = 'staff',
  'admin' = 'admin',
  'guest' = 'guest',
}

export class CreateUserDTO {
  username: string;
  @IsNotEmpty()
  fullName: string;
  @IsNotEmpty()
  password: string;
  @IsEmail()
  email: string;
  @IsEnum(USER_TYPE)
  userType: string;
  @IsMobilePhone('en-IN')
  mobileNo: string;
}
