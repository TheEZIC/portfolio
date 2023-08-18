import { Module } from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { ProjectsController } from "./projects.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectEntity, ProjectTechnologyEntity, TechnologyEntity } from "@database/entities";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProjectEntity,
      TechnologyEntity,
      ProjectTechnologyEntity,
    ])
  ],
  providers: [ProjectsService],
  controllers: [ProjectsController]
})
export class ProjectsModule {
}
