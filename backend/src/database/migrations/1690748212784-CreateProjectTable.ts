import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { CreateTableMigration } from "@database/migrations/abstracts/CreateTableMigration";
import { SingleTableMigration } from "@database/migrations/types";

export class CreateProjectTable1690748212784 extends CreateTableMigration implements MigrationInterface, SingleTableMigration {
  public readonly tableName: string = "project";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: this.tableName,
      columns: [
        {
          name: "id",
          type: "integer",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment",
        },
        {
          name: "name",
          type: "text",
          isNullable: false,
        },
        {
          name: "description",
          type: "text",
          isNullable: false,
        },
      ],
    }));
  }
}
