import { IsString,IsNotEmpty } from "class-validator";
export class CreateUserAuthDto {

@IsString()
@IsNotEmpty()
username: string;

@IsString()
@IsNotEmpty()
email: string;

@IsString()
@IsNotEmpty()
password: string;

}

