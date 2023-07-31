import {MigrationInterface, QueryRunner, Table} from "typeorm"
import { CreateTableMigration } from "@database/migrations/abstracts/CreateTableMigration";
import { SingleTableMigration } from "@database/migrations/types";

export class CreateAboutTable1690748546419 extends CreateTableMigration implements MigrationInterface, SingleTableMigration {
  public readonly tableName: string = "about";

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
          name: "title",
          type: "text",
          isNullable: false,
        },
        {
          name: "text",
          type: "text",
          isNullable: false,
        },
      ],
    }));
  }
}
