import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig:TypeOrmModuleOptions={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Shrihari',
    database: 'Student',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true
}