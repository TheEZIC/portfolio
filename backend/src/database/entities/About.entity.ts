import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { TechnologyEntity } from "@database/entities/Technology.entity";

@Entity({
  name: "about",
})
export class AboutEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "title",
    type: "text",
    nullable: false,
  })
  title: string;

  @Column({
    name: "text",
    type: "text",
    nullable: false,
  })
  text: string;

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
