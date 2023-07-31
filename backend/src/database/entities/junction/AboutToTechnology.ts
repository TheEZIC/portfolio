import { Entity, PrimaryColumn } from "typeorm";

@Entity({
  name: "about_to_technology",
})
export class AboutToTechnology {
  @PrimaryColumn({
    name: "about_id",
    type: "integer",
    nullable: false,
  })
  aboutId: number;

  @PrimaryColumn({
    name: "technology_id",
    type: "integer",
    nullable: false,
  })
  technologyId: number;
}
