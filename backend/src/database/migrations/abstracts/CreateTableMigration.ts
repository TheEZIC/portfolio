import {QueryRunner} from "typeorm";
import {SingleTableMigration} from "../types";

export abstract class CreateTableMigration implements SingleTableMigration {
  public readonly abstract tableName: string;

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
