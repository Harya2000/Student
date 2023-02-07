import { Injectable } from "@nestjs/common";
import { ContextIdFactory } from "@nestjs/core";
import { InjectRepository } from "@nestjs/typeorm";
import { create } from "domain";
import { Student } from "src/modules/student/entities/students.entity";
import { CreateCourseDto } from "../dto/createcourse.dto"
import { course } from "../entities/course.entity";
import { CourseRepository } from "../repositories/course.repository";

@Injectable()
export class CourseService{
    constructor(@InjectRepository(CourseRepository) private CourseRepository:CourseRepository){}

 async getAllCourse(){
    return await this.CourseRepository.find({relations:['student']})
 }
// async getAllStudents(){
//     return await this.CourseRepository.createQueryBuilder('q')
//     .leftJoinAndSelect('q.student','qs')
//     .leftJoinAndSelect('qs.course','o')
//     .getMany()
// }
async CreateCourse(
    course:CreateCourseDto,
    student:Student
    ){
    const  newCourse = await this.CourseRepository.save({
        Name:course.Name,
        status:course.status
    })
    console.log(newCourse)
     student.Course=[...student.Course,newCourse]
     await student.save()

     return newCourse
//    const newCourse = await this.CourseRepository.save(Course)
//    console.log(newCourse)
        // Name:Course.Name,
        // status:Course.status
    // })
    // student.Course = [...student.Course,newCourse]
    // await student.save()
    // console.log(student.Course)
    // return newCourse

}

// async getById(id:number){
//     return await this.CourseRepository.findOne(id)
// }

async  getById(id:number):Promise<course>{
    return await this.CourseRepository.findOne(id,{relations:['student']})
}
// async UpdateById(id:number){
//     return await this.studentRepository.update({where:{id:id}})
// }
async Delete(id:number){
    return await this.CourseRepository.delete(id)
}

 }
