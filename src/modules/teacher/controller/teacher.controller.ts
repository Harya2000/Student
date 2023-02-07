import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTeacherDto } from '../dto/teacher.dto';
import { TeacherService } from '../services/teacher.services';

@Controller('Teacher')
export class TeacherController {
    constructor(private teacherService:TeacherService){}

    @Get('/')
    getAllStudents(){
        return this.teacherService.getAllTeacher()
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
   async CreateStudents(@Body() Teacherdata:CreateTeacherDto){
        return await this.teacherService.CreateTeacher(Teacherdata)
        
    }

    @Get('/:id')
   getQuizById(@Param('id',ParseIntPipe) id:number){
       return this.teacherService.getById(id);

   }

//    @Put('/:id')
//    UpdateById(@Param('id',ParseIntPipe) id:number){
//     return this.StudentService.UpdateById(id)
//    }
@Delete('/:id')
Delete(@Param('id',ParseIntPipe) id:number){
    return this.teacherService.Delete(id)
}
}
