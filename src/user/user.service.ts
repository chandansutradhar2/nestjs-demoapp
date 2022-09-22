import { Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
  ) {}

  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return await this.db.collection('users').insertOne(createUserDto);
  }

  async findAll() {
    //return `This action returns all user`;
    return await this.db.collection('users').find().toArray();

  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
