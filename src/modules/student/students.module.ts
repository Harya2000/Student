import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsController } from './controller/students.controller';
import { StudentRepository } from './repositories/students.repository';
import { StudentService } from './services/students.service';

@Module({
    controllers:[StudentsController],
    imports:[TypeOrmModule.forFeature([StudentRepository])],
    providers:[StudentService]
})
export class StudentsModule {}
