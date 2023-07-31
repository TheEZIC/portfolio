import { Entity, PrimaryColumn } from "typeorm";

@Entity({
  name: "project_to_project_technology",
})
export class ProjectToProjectTechnology {
  @PrimaryColumn({
    name: "project_id",
    type: "integer",
    nullable: false,
  })
  projectId: number;

  @PrimaryColumn({
    name: "project_technology_id",
    type: "integer",
    nullable: false,
  })
  projectTechnologyId: number;
}
