import { Module } from "@nestjs/common";
import { AboutController } from "./about.controller";
import { AboutService } from "./about.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AboutEntity, AboutToTechnology, ProjectTechnologyEntity, TechnologyEntity } from "@database/entities";
import { TranslationEntity } from "@database/entities/Translation.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AboutEntity,
      TechnologyEntity,
      ProjectTechnologyEntity,
      AboutToTechnology,
      TranslationEntity,
    ])
  ],
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule {}
