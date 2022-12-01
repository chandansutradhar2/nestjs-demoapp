import { MiddlewareConsumer, Module } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { TokenValidator } from './middlewares/validator.middleware';
import { UserModule } from './users/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('user');
    consumer.apply(TokenValidator).forRoutes('user');
  }
}
