import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('/user')
export class UserController {
  users = [
    {
      id: 1,
      name: 'chandan',
      userType: 'staff',
      mobileNo: '8080811145',
    },
    {
      name: 'naveen',
      userType: 'admin',
      mobileNo: '8080811146',
      id: 2,
    },
  ];

  @Get()
  test() {
    return 'user api working correctly';
  }

  @Get('/all')
  getAllUser() {
    return this.users;
  }

  @Post('/add')
  addUser(@Body() body: any) {
    let idx = this.users.findIndex((i) => {
      return i.mobileNo == body.mobileNo;
    });
    if (idx !== -1) {
      return 'user already exist with mobile no';
    } else {
      this.users.push(body);
      return 'user created succssfully';
    }
  }

  @Get('/byId')
  findById(@Query('id') id: string) {
    return this.users.find((a) => {
      return a.id.toString() == id;
    });
  }

  @Patch('/update')
  updateUser(@Body() user: any) {
    // console.log(
    //   `deserialized data ${user} data in JSON Format. ${JSON.stringify(user)}`,
    // );

    let idx = this.users.findIndex((i) => {
      return i.mobileNo == user.mobileNo;
    });

    if (idx !== -1) {
      user.id = this.users[idx].id;
      this.users.splice(idx, 1, user);
      return 'user updated successfully';
    } else {
      return `no user found with  ${user.mobileNo} as mobile no`;
    }
  }

  @Delete('/delete')
  deleteUser(@Body() body: any) {
    console.log(body);
    let idx = this.users.findIndex((i) => {
      return i.mobileNo == body.mobileNo;
    });

    if (idx !== -1) {
      this.users.splice(idx, 1);
      return 'user deleted successfully';
    } else {
      return `no user found with  ${body.mobileNo} as mobile no`;
    }
  }
}