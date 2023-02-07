import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsController } from '../student/controller/students.controller';
import { StudentRepository } from '../student/repositories/students.repository';
import { StudentService } from '../student/services/students.service';
import { CourseController } from './controller/course.controller';
import { CourseRepository } from './repositories/course.repository';
import { CourseService } from './services/course.service';

@Module({
    controllers:[CourseController,StudentsController],
    imports:[TypeOrmModule.forFeature([CourseRepository,StudentRepository])],
    providers:[CourseService,StudentService]
})
export class CourseModule {}
