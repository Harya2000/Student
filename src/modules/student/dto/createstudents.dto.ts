import { IsNotEmpty, Length } from "class-validator";

export class CreateStudentsDto{

    @IsNotEmpty({message:'The name should not be empty'})
    @Length(2,255)
    Name:string;

    @IsNotEmpty()
    age:number

    @IsNotEmpty()
    course:string

}