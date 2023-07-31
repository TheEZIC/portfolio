import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TechnologyEntity } from "@database/entities";

@Entity({
  name: "project_technology",
})
export class ProjectTechnologyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "usage_description",
    type: "text",
    nullable: true,
  })
  usageDescription?: string;

  @Column({
    type: "integer",
    name: "technology_id",
    nullable: false,
  })
  @ManyToOne(() => TechnologyEntity, (technology) => technology.projectTechnologies, {
    eager: true,
  })
  base: ProjectTechnologyEntity;
}
