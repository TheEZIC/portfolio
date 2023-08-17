import { Controller, Get, Inject } from "@nestjs/common";
import { AboutService } from "@about/about.service";

@Controller("/about")
export class AboutController {
  @Inject(AboutService)
  private aboutService: AboutService;

  @Get("/")
  public get() {
    return this.aboutService.getData();
  }
}
