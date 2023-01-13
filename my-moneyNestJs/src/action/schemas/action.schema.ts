import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ActionDocument = Document & Action

@Schema()
export class Action {

    @Prop({required: true})
    amount: number

    @Prop({required: true})
    user_id: string

    @Prop({required: true})
    date_of_action: Date

    @Prop({required: true, type: String})
    action_type: ActionType
}

export const ActionFactory = SchemaFactory.createForClass(Action)

export enum ActionType {
    EXPENSE = 'Expense',
    INCOME = 'Income'
}