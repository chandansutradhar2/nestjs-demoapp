import { ApiProperty } from '@nestjs/swagger';

import { IsEmail, IsNotEmpty, IsMobilePhone, IsEnum } from 'class-validator';

export enum USER_TYPE {
  'staff' = 'staff',
  'admin' = 'admin',
  'guest' = 'guest',
}

export class CreateUserDTO {
  @ApiProperty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  @IsEnum(USER_TYPE)
  @ApiProperty()
  userType: string;

  @ApiProperty()
  @IsMobilePhone('en-IN')
  mobileNo: string;
}
