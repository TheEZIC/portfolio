import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"
import { CreateTableFkMigration } from "@database/migrations/abstracts/CreateTableFkMigration";
import { SingleTableMigration } from "@database/migrations/types";

export class CreateProjectTechnologyRelations1690810778563 extends CreateTableFkMigration implements MigrationInterface, SingleTableMigration {
  public readonly tableName: string = "project_technology";

  public readonly migrations: TableForeignKey[] = [
    new TableForeignKey({
      columnNames: ["technology_id"],
      referencedTableName: "technology",
      referencedColumnNames: ["technology_id"],
    }),
  ];
}
