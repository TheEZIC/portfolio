import {TableForeignKey} from "typeorm";

export interface WithFkMigration {
  migrations: TableForeignKey[];
}
