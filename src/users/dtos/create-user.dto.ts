import { IsEmail, IsNotEmpty, IsMobilePhone, IsEnum } from 'class-validator';

export enum USER_TYPE {
  'staff' = 'staff',
  'admin' = 'admin',
  'guest' = 'guest',
}

export class CreateUserDTO {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsEnum(USER_TYPE)
  userType: string;
  @IsMobilePhone('en-IN')
  mobileNo: string;
}
