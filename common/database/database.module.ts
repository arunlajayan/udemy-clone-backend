import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://malluman:paloden@cluster0.9ixrfzq.mongodb.net',
      }),
    }),
  ],
})
export class DatabaseModule {}