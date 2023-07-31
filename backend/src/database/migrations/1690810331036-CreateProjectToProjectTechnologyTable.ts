import { MigrationInterface } from "typeorm"
import { CreateManyToManyTableMigration } from "@database/migrations/abstracts/CreateManyToManyTableMigration";
import { SingleTableMigration } from "@database/migrations/types";

export class CreateProjectToProjectTechnologyTable1690810331036 extends CreateManyToManyTableMigration implements MigrationInterface, SingleTableMigration {
    public readonly tableName: string = "project_to_project_technology";

    public readonly table1RefName: string = "project_technology";
    public readonly column1RefName: string = "project_technology_id";

    public readonly table2RefName: string = "project";
    public readonly column2RefName: string = "project_id";
}
