import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CurrentDocument = Current & Document

@Schema()
export class Current {

    @Prop({required: true})
    amount: number;

    @Prop({required: true})
    user_id: string;

    @Prop({required: true})
    creation_date: Date;
}

export const CurrentFactory = SchemaFactory.createForClass(Current);