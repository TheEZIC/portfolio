import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { AboutEntity } from "@database/entities";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AboutService {
  @InjectRepository(AboutEntity)
  private aboutRepository: Repository<AboutEntity>;

  public async getData() {
    const [data] = await this.aboutRepository.find({
      relations: {
        technologies: true,
      },
    });

    return data;
  }
}
