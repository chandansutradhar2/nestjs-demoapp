import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll() {
    return 'GetAll invoked';
  }

  @Get('/many')
  getMany() {
    return 'Get Many invoked';
  }

  @Get('/parkingareas')
  getAllParkingArea() {
    return 'return all parking areas ';
  }

  @Post('/create')
  createParkingArea(@Body() body: any) {
    console.log(body);
    return body;
  }

  // @Delete()

  // @Patch()
}
