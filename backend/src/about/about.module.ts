import { Module } from "@nestjs/common";
import { AboutController } from "./about.controller";
import { AboutService } from "./about.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AboutEntity, ProjectTechnologyEntity, TechnologyEntity } from "@database/entities";


@Module({
  imports: [
    TypeOrmModule.forFeature([
      AboutEntity,
      TechnologyEntity,
      ProjectTechnologyEntity,
    ])
  ],
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule {}
