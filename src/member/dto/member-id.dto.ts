import { ApiProperty } from "@nestjs/swagger";
export class memberIdDTO {
    @ApiProperty()
    _id: String;
    student_id: Number;
}