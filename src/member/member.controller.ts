import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { memberIdDTO } from './dto/member-id.dto';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) { }

  @Post()
  async create(@Body() createMemberDto: CreateMemberDto) {
    await this.memberService.create(createMemberDto);
  }

  @Get()
  async find() {
    return await this.memberService.find();
  }

  @Get('/:id')
  async findOne(@Param() params: memberIdDTO) {
    return await this.memberService.findOne(params.id);
  }

}
