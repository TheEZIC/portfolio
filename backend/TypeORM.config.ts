import { DataSource, DataSourceOptions } from "typeorm";
import { ConfigService } from "@nestjs/config";
import {
  CreateTechnologyTable1690747701020,
  CreateProjectTechnologyTable1690748036760,
  CreateProjectTable1690748212784,
  CreateAboutTable1690748546419,
  CreateAboutToTechnologyTable1690809893116,
  CreateProjectToProjectTechnologyTable1690810331036,
  CreateProjectTechnologyRelations1690810778563,
} from "@database/migrations";

const configService = new ConfigService();

export const TypeORMConfig: DataSourceOptions = {
  type: "postgres",
  host: configService.get("DATABASE_HOST")!,
  port: Number(configService.get("DATABASE_PORT")!),
  username: configService.get("DATABASE_USER")!,
  password: configService.get("DATABASE_PASSWORD")!,
  database: configService.get("DATABASE_DB")!,
  entities: [
    "./**/*.entity.js"
  ],
  migrations: [
    CreateTechnologyTable1690747701020,
    CreateProjectTechnologyTable1690748036760,
    CreateProjectTable1690748212784,
    CreateAboutTable1690748546419,
    CreateAboutToTechnologyTable1690809893116,
    CreateProjectToProjectTechnologyTable1690810331036,
    CreateProjectTechnologyRelations1690810778563,
  ],
};

export default new DataSource(TypeORMConfig);
