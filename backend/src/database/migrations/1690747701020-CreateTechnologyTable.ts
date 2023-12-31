import { MigrationInterface, QueryRunner, Table} from "typeorm"
import { CreateTableMigration } from "./abstracts/CreateTableMigration";
import { SingleTableMigration } from "./types";

export class CreateTechnologyTable1690747701020 extends CreateTableMigration implements MigrationInterface, SingleTableMigration {
  public readonly tableName: string = "technology";

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
          name: "name_id",
          type: "integer",
          isNullable: false,
        },
        {
          name: "description_id",
          type: "integer",
          isNullable: false,
        },
        {
          name: "icon",
          type: "text",
          isNullable: true,
        },
        {
          name: "main",
          type: "boolean",
          isNullable: true,
          default: true,
        },
      ],
    }));
  }
}
