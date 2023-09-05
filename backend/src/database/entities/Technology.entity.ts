import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProjectTechnologyEntity } from "@database/entities/ProjectTechnology.entity";
import { TranslationEntity } from "@database/entities/Translation.entity";

@Entity({
  name: "technology",
})
export class TechnologyEntity {
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
  description: TranslationEntity;

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
