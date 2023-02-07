import { IsNotEmpty, Length } from "class-validator";

export class CreateTeacherDto{

    @IsNotEmpty({message:'The name should not be empty'})
    @Length(2,255)
    Name:string;

    @IsNotEmpty()
    courses:string

}