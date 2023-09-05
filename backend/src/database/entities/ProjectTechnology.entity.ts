import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TechnologyEntity } from "@database/entities";
import { TranslationEntity } from "@database/entities/Translation.entity";

@Entity({
  name: "project_technology",
})
export class ProjectTechnologyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "usage_description_id",
    type: "text",
    nullable: false,
  })
  @ManyToOne(() => TranslationEntity, {
    cascade: true,
  })
  usageDescription: TranslationEntity;

  @Column({
    type: "integer",
    name: "technology_id",
    nullable: false,
  })
  @ManyToOne(() => TechnologyEntity, (technology) => technology.projectTechnologies)
  base: TechnologyEntity;
}
