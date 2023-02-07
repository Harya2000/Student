import { EntityRepository, Repository } from "typeorm";
import { course } from "../entities/course.entity";

@EntityRepository(course)
export class CourseRepository extends Repository<course>{}