import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";
import {SingleTableMigration, WithFkMigration} from "../types";

export abstract class CreateTableFkMigration implements MigrationInterface, SingleTableMigration, WithFkMigration {
  public abstract readonly tableName: string;
  public abstract readonly migrations: TableForeignKey[];

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKeys(this.tableName, this.migrations);
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.migrations);
  }
}
