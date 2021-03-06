import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dbDoublepor:db0939342490@cluster0.gbuhm.mongodb.net/hello'),
    MemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
