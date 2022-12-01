import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class TokenValidator implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let token = req.header('token');
    console.log('token:', token);
    if (token) {
      next();
    } else {
      res.status(401).send('unauthorized access').end();
    }
  }
}
