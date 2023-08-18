import { Controller, Get, Inject, Param } from "@nestjs/common";
import { ProjectsService } from "./projects.service";

@Controller("/projects")
export class ProjectsController {
  @Inject(ProjectsService)
  private projectsService: ProjectsService;

  @Get("/")
  public getAll() {
    return this.projectsService.getAll();
  }

  @Get("/:id")
  public getById(
    @Param("id")
      id: number,
  ) {
    return this.projectsService.getById(id);
  }
}
