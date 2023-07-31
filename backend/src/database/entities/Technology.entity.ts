import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProjectTechnologyEntity} from "@database/entities/ProjectTechnology.entity";

@Entity({
  name: "technology",
})
export class TechnologyEntity {
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
    nullable: true,
  })
  description?: string;

  @Column({
    name: "icon",
    type: "text",
    nullable: true,
  })
  icon?: string;

  @Column({
    name: "main",
    type: "boolean",
    nullable: false,
    default: false,
  })
  main: boolean;

  @OneToMany(() => ProjectTechnologyEntity, (technology) => technology.base)
  projectTechnologies: ProjectTechnologyEntity[];
}
