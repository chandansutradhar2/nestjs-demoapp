import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userSvc: UserService) {}
  @Get()
  test() {
    return 'user api working correctly';
  }

  @Get('/all')
  getAllUser() {
    return this.userSvc.getAllUser();
  }

  @Post('/add')
  addUser(@Body() body: CreateUserDTO) {
    return this.userSvc.createUser(body);
  }

  @Get('/byId')
  findById(@Query('id') id: string) {
    return this.userSvc.getUserById(parseInt(id));
  }

  @Patch('/update')
  updateUser(@Body() user: UpdateUserDTO) {
    return this.userSvc.updateUser(user);
  }

  @Delete('/delete')
  deleteUser(@Body() body: any) {
    return this.userSvc.deleteUser(body);
  }
}
