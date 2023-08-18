import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProjectEntity } from "@database/entities";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProjectsService {
  @InjectRepository(ProjectEntity)
  private projectsService: Repository<ProjectEntity>

  public async getAll() {
    return this.projectsService.find({
      relations: {
        technologies: true,
      },
    });
  }

  public getById(id: number) {
    return this.projectsService.findOne({
      where: {
        id,
      },
      relations: {
        technologies: true,
      },
    });
  }
}
