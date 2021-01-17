import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMemberDto } from './dto/create-member.dto';
import { MemberDocument } from './entities/member.entity';

@Injectable()
export class MemberService {
  constructor(@InjectModel('member') private memberModel: Model<MemberDocument>) { }

  async create(createMemberDto: CreateMemberDto) {
    const createMember = new this.memberModel(createMemberDto);
    return createMember.save();
  }

  async find() {
    return await this.memberModel.find().exec();
  }

  async findOne(id: String) {
    return await this.memberModel.findOne({ id: id }).exec();
  }

}
