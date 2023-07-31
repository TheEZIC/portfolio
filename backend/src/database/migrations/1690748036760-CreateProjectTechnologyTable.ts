import {MigrationInterface, QueryRunner, Table} from "typeorm"
import { CreateTableMigration } from "@database/migrations/abstracts/CreateTableMigration";
import { SingleTableMigration } from "@database/migrations/types";

export class CreateProjectTechnologyTable1690748036760 extends CreateTableMigration implements MigrationInterface, SingleTableMigration {
  public readonly tableName = "project_technology";

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
          name: "usage_description",
          type: "text",
          isNullable: false,
        },
      ],
    }))
  }
}
