import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { course } from "src/modules/course/entities/course.entity";
import { CreateStudentsDto } from "../dto/createStudents.dto";
import { Student } from "../entities/students.entity";
import { StudentRepository } from "../repositories/students.repository";

@Injectable()
export class StudentService{
    constructor(@InjectRepository(StudentRepository) private studentRepository:StudentRepository){}

 async getAllStudents(){
    return await this.studentRepository.find({relations:['Course']})
 }

async CreateStudents(student:CreateStudentsDto){
    return await this.studentRepository.save(student)
}

// async getById(id:number):Promise<Student>{  
//     return await this.studentRepository.findOne(id)
// }
async  getById(id:number){
    return await this.studentRepository.findOne(id,{relations:['Course']})
}
// async UpdateById(id:number){
//     return await this.studentRepository.update({where:{id:id}})
// }

async Delete(id:number){
    return await this.studentRepository.delete(id)
}

 }
