import {Schema, Document, Types, model} from "mongoose";
import {ProjectTechnology} from "./ProjectTechnology";

export type Project = {
  title: string;
  description: string;
  technologies: ProjectTechnology;
} & Document;

export const ProjectSchema = new Schema<Project>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  technologies: [{
    type: Types.ObjectId,
    ref: "ProjectTechnology",
  }],
});

export const ProjectModel = model<Project>("Project", ProjectSchema);
