import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { StudentService } from 'src/modules/student/services/students.service';
import { CreateCourseDto } from '../dto/createcourse.dto';
import { course } from '../entities/course.entity';
import { CourseService } from '../services/course.service';

@Controller('Course')
export class CourseController {
    constructor(private courseService:CourseService,private studentService:StudentService){}

    @Get('/')
    getAllStudents():Promise<course[]>{
        return this.courseService.getAllCourse()
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
   async Createcourse(@Body() coursedata:CreateCourseDto){
    const Course = await this.studentService.getById(coursedata.studentId)
    return await this.courseService.CreateCourse(coursedata,Course)
    }

    @Get('/:id')
   getQuizById(@Param('id',ParseIntPipe) id:number):Promise<course>{
       return this.courseService.getById(id);

   }

//    @Put('/:id')
//    UpdateById(@Param('id',ParseIntPipe) id:number){
//     return this.StudentService.UpdateById(id)
//    }

@Delete('/:id')
Delete(@Param('id',ParseIntPipe) id:number){
    return this.courseService.Delete(id)
}
}
