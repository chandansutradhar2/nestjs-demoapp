import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { ApiProperty, ApiBody } from '@nestjs/swagger';

import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LoginDTO } from './users/dtos/login-user.dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @ApiBody({
    description: `login user using username and password`,
  })
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() body: LoginDTO) {
    return this.authService.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
