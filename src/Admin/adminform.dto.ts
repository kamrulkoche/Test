import { IsEmail, IsNotEmpty, IsString, Length} from "class-validator";

export class AdminForm{
    @IsNotEmpty({message:"Name Empty"})
    @IsString({message:"This is no string"})
    name:string;
    @IsEmail()
    @IsNotEmpty({message:"This is Empty"})
    @Length(3,255)
    email:string;
}

