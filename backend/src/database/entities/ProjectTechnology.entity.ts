import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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
  @JoinColumn({ name: "usage_description_id" })
  @ManyToOne(() => TranslationEntity, {
    cascade: true,
    eager: true,
  })
  usageDescription: TranslationEntity;

  @Column({
    type: "integer",
    name: "technology_id",
    nullable: false,
  })
  @JoinColumn({ name: "technology_id" })
  @ManyToOne(() => TechnologyEntity, (technology) => technology.projectTechnologies)
  base: TechnologyEntity;
}
