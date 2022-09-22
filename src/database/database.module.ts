import { Module } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';

@Module({
  imports:[],
  controllers:[],
    providers:[
        {
            provide:'DATABASE_CONNECTION',
            useFactory:async ():Promise<Db>=>{
            try {
              const client=await MongoClient.connect("mongodb://timepayx.com:32000/",{
                auth:{
                  username:'npst',
                  password:'Npst@Mongo@2022'
                },
              })
              return client.db('testdb');
        
            } catch (error) {
              throw error;
            }
            }
          }
    ],
    exports: ['DATABASE_CONNECTION']
})
export class DatabaseModule {

}
