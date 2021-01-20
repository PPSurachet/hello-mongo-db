import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member, MemberDocument } from './entities/member.entity';

@Injectable()
export class MemberService {
  constructor(@InjectModel(Member.name) private memberModel: Model<MemberDocument>) { }

  async find() {
    return await this.memberModel.find().exec();
  }

  async findOne(student_id) {
    return await this.memberModel.findOne({ student_id: student_id }).exec();
  }

  async create(createMemberDto: CreateMemberDto) {
    const createMember = new this.memberModel(createMemberDto);
    return createMember.save();
  }

  async update(_id: String, UpdateMemberDto: UpdateMemberDto) {
    await this.memberModel.updateOne(
      { _id: _id },
      {
        student_id: UpdateMemberDto.student_id,
        name: UpdateMemberDto.name,
        major: UpdateMemberDto.major,
        factory: UpdateMemberDto.factory
      },
      { upsert: true },
    )
  }

  async remove(_id: String) {
    return await this.memberModel.remove({ _id: _id }).exec()
  }

}
