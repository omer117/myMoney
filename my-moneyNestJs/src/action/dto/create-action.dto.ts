import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { type } from "os";
import { ActionType } from "../schemas/action.schema";

export class CreateActionDto {
@IsNumber()
@IsNotEmpty()
amount: number;

@IsNotEmpty()
@IsString()
user_id: string;

@IsNotEmpty()
@IsString()
date_of_action: string;

@IsNotEmpty()
@IsEnum(ActionType)
action_type: ActionType;
}
