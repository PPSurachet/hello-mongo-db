import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { memberIdDTO } from './dto/member-id.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) { }

  @Get()
  async find() {
    return await this.memberService.find();
  }

  @Get('/:student_id')
  async findOne(@Param() params: memberIdDTO) {
    return await this.memberService.findOne(params.student_id);
  }

  @Post('/create')
  async create(@Body() createMemberDto: CreateMemberDto) {
    await this.memberService.create(createMemberDto);
  }

  @Put('/update/:_id')
  async updateOne(@Param() params: memberIdDTO, @Body() UpdateMemberDto: UpdateMemberDto) {
    return await this.memberService.update(params._id);
  }

  @Delete('/detele/:_id')
  async remove(@Param() params: memberIdDTO) {
    return await this.memberService.remove(params._id);
  }

}
