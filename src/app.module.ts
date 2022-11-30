import { Module } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
