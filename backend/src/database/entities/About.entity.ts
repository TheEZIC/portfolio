import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TechnologyEntity } from "@database/entities/Technology.entity";
import { TranslationEntity } from "@database/entities/Translation.entity";

@Entity({
  name: "about",
})
export class AboutEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "title_id",
    type: "integer",
    nullable: false,
  })
  title: TranslationEntity;

  @Column({
    name: "text_id",
    type: "integer",
    nullable: false,
  })
  @ManyToOne(() => TranslationEntity, {
    cascade: true,
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
