import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TechnologyEntity } from "@database/entities/Technology.entity";
import { TranslationEntity } from "@database/entities/Translation.entity";

@Entity({
  name: "about",
})
export class AboutEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name: "title_id" })
  @ManyToOne(() => TranslationEntity, {
    cascade: true,
    eager: true,
  })
  title: TranslationEntity;

  @JoinColumn({ name: "text_id" })
  @ManyToOne(() => TranslationEntity, {
    cascade: true,
    eager: true,
  })
  text: TranslationEntity;

  @ManyToMany(() => TechnologyEntity)
  @JoinTable({
    name: "about_to_technology",
    joinColumn: {
      name: "about_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "technology_id",
      referencedColumnName: "id",
    },
  })
  technologies: TechnologyEntity[];
}
