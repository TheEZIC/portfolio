import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "translation",
})
export class TranslationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "text",
    name: "ru",
    nullable: true,
    default: "",
  })
  ru?: string;

  @Column({
    type: "text",
    name: "en",
    nullable: true,
    default: "",
  })
  en?: string;
}
