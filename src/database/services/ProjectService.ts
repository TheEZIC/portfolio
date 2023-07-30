import {ProjectModel} from "@database/schemes";

export class ProjectService {
  public async getAll() {
    return ProjectModel.find();
  }

  public async getById(id: number) {
    return ProjectModel.findById(id);
  }
}
