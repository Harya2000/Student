import { IsNotEmpty, Length } from "class-validator";

export class CreateCourseDto{

    @IsNotEmpty({message:'The name should not be empty'})
    @Length(2,255)
    Name:string;

 
    @IsNotEmpty()
    status:string

    @IsNotEmpty()
    studentId:number

}