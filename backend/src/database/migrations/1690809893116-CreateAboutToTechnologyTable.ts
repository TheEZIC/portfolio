import { MigrationInterface } from "typeorm"
import { CreateManyToManyTableMigration } from "@database/migrations/abstracts/CreateManyToManyTableMigration";
import { SingleTableMigration } from "@database/migrations/types";

export class CreateAboutToTechnologyTable1690809893116 extends CreateManyToManyTableMigration implements MigrationInterface, SingleTableMigration {
  public readonly tableName: string = "about_to_project";

  public readonly table1RefName: string = "about";
  public readonly column1RefName: string = "about_id";

  public readonly table2RefName: string = "technology";
  public readonly column2RefName: string = "technology_id";
}
