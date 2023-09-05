import { Module } from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { ProjectsController } from "./projects.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectEntity, ProjectTechnologyEntity, TechnologyEntity } from "@database/entities";
import { TranslationEntity } from "@database/entities/Translation.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProjectEntity,
      TechnologyEntity,
      ProjectTechnologyEntity,
      TranslationEntity,
    ])
  ],
  providers: [ProjectsService],
  controllers: [ProjectsController]
})
export class ProjectsModule {
}
