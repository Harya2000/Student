import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTeacherDto } from "../dto/teacher.dto"
import { TeacherRepository } from "../repositories/teacher.repository";

@Injectable()
export class TeacherService{
    constructor(@InjectRepository(TeacherRepository) private TeacherRepository:TeacherRepository){}

 async getAllTeacher(){
    return await this.TeacherRepository.find()
 }

async CreateTeacher(teacher:CreateTeacherDto){
    return await this.TeacherRepository.save(teacher)
}
async  getById(id:number){
    return await this.TeacherRepository.findOne(id)
}
// async UpdateById(id:number){
//     return await this.studentRepository.update({where:{id:id}})
// }
async Delete(id:number){
    return await this.TeacherRepository.delete(id)
}

 }
