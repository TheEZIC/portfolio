import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { CreateTableMigration } from "./abstracts/CreateTableMigration";
import { SingleTableMigration } from "./types";

export class CreateTranslationTable1690747701000 extends CreateTableMigration implements MigrationInterface, SingleTableMigration {
  public readonly tableName: string = "translation";

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
          name: "ru",
          type: "text",
          isNullable: true,
        },
        {
          name: "en",
          type: "text",
          isNullable: true,
        },
      ],
    }));
  }
}
