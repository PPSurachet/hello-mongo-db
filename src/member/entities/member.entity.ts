import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type MemberDocument = Member & Document;

@Schema({ 'collection': 'member' })
export class Member {
    @Prop()
    id: number;

    @Prop()
    name: string;

    @Prop()
    major: string;

    @Prop()
    Factory: string;
}

export const MemberSchema = SchemaFactory.createForClass(Member);