import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"
import { CreateTableFkMigration } from "@database/migrations/abstracts/CreateTableFkMigration";
import { SingleTableMigration } from "@database/migrations/types";

export class CreateAboutRelations1690810778580 extends CreateTableFkMigration implements MigrationInterface, SingleTableMigration {
  public readonly tableName: string = "about";

  public readonly migrations: TableForeignKey[] = [
    new TableForeignKey({
      columnNames: ["title_id"],
      referencedTableName: "translation",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["text_id"],
      referencedTableName: "translation",
      referencedColumnNames: ["id"],
    }),
  ];
}
