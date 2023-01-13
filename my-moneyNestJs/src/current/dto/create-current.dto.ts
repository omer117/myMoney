import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCurrentDto {
    
    @IsNumber()
    @IsNotEmpty()
    amount: number 

    @IsNotEmpty()
    @IsString()
    user_id: string

    @IsNotEmpty()
    @IsDate()
    creation_date: Date;

}
