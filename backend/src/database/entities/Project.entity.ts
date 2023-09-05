import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProjectTechnologyEntity } from "@database/entities/ProjectTechnology.entity";
import { TranslationEntity } from "@database/entities/Translation.entity";

@Entity({
  name: "project",
})
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "name_id",
    type: "integer",
    nullable: false,
  })
  @ManyToOne(() => TranslationEntity, {
    cascade: true,
  })
  name: TranslationEntity;

  @Column({
    name: "description_id",
    type: "integer",
    nullable: false,
  })
  @ManyToOne(() => TranslationEntity, {
    cascade: true,
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
