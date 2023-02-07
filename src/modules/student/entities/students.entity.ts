
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { course } from "src/modules/course/entities/course.entity";

@Entity('Students')
export class Student extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar'
    })
    Name:string

    @Column({
        type:'integer',
    })
    age:number

    @Column({
        type:'varchar'
    })
    course:string

    @Column({
        type:'boolean',
        default:1
    })
    isActive:boolean

    @OneToMany(type=>course,Course=>Course.student)
    Course:course[]
    
}