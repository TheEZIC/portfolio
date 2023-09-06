import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TechnologyEntity } from "@database/entities";
import { TranslationEntity } from "@database/entities/Translation.entity";

@Entity({
  name: "project_technology",
})
export class ProjectTechnologyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name: "usage_description_id" })
  @ManyToOne(() => TranslationEntity, {
    cascade: true,
    eager: true,
  })
  usageDescription: TranslationEntity;

  @JoinColumn({ name: "technology_id" })
  @ManyToOne(() => TechnologyEntity, (technology) => technology.projectTechnologies)
  base: TechnologyEntity;
}
