import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProjectTechnologyEntity } from "@database/entities/ProjectTechnology.entity";
import { TranslationEntity } from "@database/entities/Translation.entity";

@Entity({
  name: "project",
})
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name: "name_id" })
  @ManyToOne(() => TranslationEntity, {
    cascade: true,
    eager: true,
  })
  name: TranslationEntity;

  @JoinColumn({ name: "description_id" })
  @ManyToOne(() => TranslationEntity, {
    cascade: true,
    eager: true,
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
