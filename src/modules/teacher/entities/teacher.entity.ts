import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Teacher')
export class teacher extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar'
    })
    Name:string

    @Column({
        type:'varchar'
    })
    courses:string
}