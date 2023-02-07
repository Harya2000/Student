import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { StudentsModule } from './modules/student/students.module';
import {CourseModule} from'./modules/course/course.module'
import { TeacherModule } from './modules/teacher/teacher.module';


@Module({
  imports: [StudentsModule,CourseModule,TeacherModule,TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
