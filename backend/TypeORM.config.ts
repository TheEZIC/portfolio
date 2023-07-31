import { DataSource, DataSourceOptions } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { AboutEntity, ProjectEntity, ProjectTechnologyEntity } from "@database/entities";
import {
  CreateTechnologyTable1690747701020,
  CreateProjectTechnologyTable1690748036760,
  CreateProjectTable1690748212784,
  CreateAboutTable1690748546419, CreateAboutToProjectTable1690809893116, CreateProjectTechnologyRelations1690810778563,
} from "@database/migrations";

const configService = new ConfigService();

export const TypeORMConfig: DataSourceOptions = {
  type: "postgres",
  host: configService.get("DATABASE_HOST"),
  port: configService.get("DATABASE_PORT"),
  username: configService.get("DATABASE_USER"),
  password: configService.get("DATABASE_PASSWORD"),
  database: configService.get("DATABASE_DB"),
  entities: [
    ProjectEntity,
    ProjectTechnologyEntity,
    ProjectEntity,
    AboutEntity,
  ],
  migrations: [
    CreateTechnologyTable1690747701020,
    CreateProjectTechnologyTable1690748036760,
    CreateProjectTable1690748212784,
    CreateAboutTable1690748546419,
    CreateAboutToProjectTable1690809893116,
    CreateProjectTechnologyRelations1690810778563,
  ],
};

export default new DataSource(TypeORMConfig);
