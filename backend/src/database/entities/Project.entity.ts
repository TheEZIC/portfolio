import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProjectTechnologyEntity } from "@database/entities/ProjectTechnology.entity";

@Entity({
  name: "project",
})
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "name",
    type: "text",
    nullable: false,
  })
  name: string;

  @Column({
    name: "description",
    type: "text",
    nullable: false,
  })
  description: string;

  @ManyToMany(() => ProjectTechnologyEntity)
  @JoinTable({
    name: "project_to_project_technology",
    joinColumn: {
      name: "project_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "project_technology_id",
      referencedColumnName: "id",
    },
  })
  technologies: ProjectTechnologyEntity[];
}
