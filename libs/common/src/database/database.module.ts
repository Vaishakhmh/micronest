import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
config();
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://vaishakhmh:gamblers@cluster0.hdqjx.mongodb.net/',
      }),
    }),
  ],
})
export class DatabaseModule {}
