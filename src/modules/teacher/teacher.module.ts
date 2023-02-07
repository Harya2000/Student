import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherController } from './controller/teacher.controller';
import { TeacherRepository } from './repositories/teacher.repository';
import { TeacherService } from './services/teacher.services';

@Module({
    controllers:[TeacherController],
    imports:[TypeOrmModule.forFeature([TeacherRepository])],
    providers:[TeacherService]
})
export class TeacherModule {}
