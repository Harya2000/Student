import { EntityRepository, Repository } from "typeorm";
import { teacher } from "../entities/teacher.entity";

@EntityRepository(teacher)
export class TeacherRepository extends Repository<teacher>{}