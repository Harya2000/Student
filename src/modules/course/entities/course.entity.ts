import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "src/modules/student/entities/students.entity";

@Entity('Course')
export class course extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar'
    })
    Name:string

    @Column({
        type:'varchar'
    })
    status:string

    @ManyToOne(type=>Student,(student)=>student.Course)
    student:Student
    
}