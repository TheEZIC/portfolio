import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import {SingleTableMigration} from "../types/SingleTableMigration";

export abstract class CreateManyToManyTableMigration implements MigrationInterface, SingleTableMigration {
  public abstract readonly tableName: string;

  public abstract readonly table1RefName: string;
  public abstract readonly column1RefName: string;

  private get table1Fk(): TableForeignKey {
    return new TableForeignKey({
      columnNames: [this.column1RefName],
      referencedTableName: this.table1RefName,
      referencedColumnNames: ["id"],
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  }

  public abstract readonly table2RefName: string;
  public abstract readonly column2RefName: string;

  private get table2Fk(): TableForeignKey {
    return new TableForeignKey({
      columnNames: [this.column2RefName],
      referencedTableName: this.table2RefName,
      referencedColumnNames: ["id"],
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: this.tableName,
      columns: [
        {
          name: this.column1RefName,
          type: "integer",
          isNullable: false,
        },
        {
          name: this.column2RefName,
          type: "integer",
          isNullable: false,
        },
      ],
    }));

    await queryRunner.createForeignKeys(this.tableName, [
      this.table1Fk,
      this.table2Fk,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, [
      this.table1Fk,
      this.table2Fk,
    ]);

    await queryRunner.dropTable(this.tableName);
  }
}
