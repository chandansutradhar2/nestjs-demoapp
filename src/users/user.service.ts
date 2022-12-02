import { Injectable, NotFoundException } from '@nestjs/common';
import { throws } from 'assert';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  users = [
    {
      fullName: 'Chandan Naresh',
      username: 'chandan',
      userType: 'staff',
      mobileNo: '8080811145',
      password: 'abc123',
    },
    {
      fullName: 'Naveen chand Thakur',
      username: 'naveen',
      userType: 'admin',
      mobileNo: '8080811146',
      password: 'abc123',
    },
  ];

  createUser(body: CreateUserDTO) {
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

  getAllUser() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((a) => {
      return a.username == username;
    });
  }

  updateUser(user: UpdateUserDTO) {
    let idx = this.users.findIndex((i) => {
      return i.mobileNo == user.mobileNo;
    });

    if (idx !== -1) {
      let u = this.users[idx];
      u.fullName = user.fullName;
      u.password = user.password;
      u.mobileNo = user.mobileNo;
      u.userType = user.userType;

      this.users.splice(idx, 1, u);
      return 'user updated successfully';
    } else {
      return `no user found with  ${user.mobileNo} as mobile no`;
    }
  }

  deleteUser(body: any) {
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
