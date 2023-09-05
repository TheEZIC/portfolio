import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"
import { CreateTableFkMigration } from "@database/migrations/abstracts/CreateTableFkMigration";
import { SingleTableMigration } from "@database/migrations/types";

export class CreateProjectRelations1690810778570 extends CreateTableFkMigration implements MigrationInterface, SingleTableMigration {
  public readonly tableName: string = "project";

  public readonly migrations: TableForeignKey[] = [
    new TableForeignKey({
      columnNames: ["name_id"],
      referencedTableName: "translation",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["description_id"],
      referencedTableName: "translation",
      referencedColumnNames: ["id"],
    }),
  ];
}
