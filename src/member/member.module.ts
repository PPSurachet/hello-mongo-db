import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberSchema } from './entities/member.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'member', schema: MemberSchema }])],
  controllers: [MemberController],
  providers: [MemberService]
})
export class MemberModule { }
