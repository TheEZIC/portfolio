import {Schema, Document, Types, model} from "mongoose";
import {TechnologyModel} from "./Technology";

export type ProjectTechnology = {
  technology: Technology;
  description: string;
} & Document;

export const ProjectTechnologySchema = new Schema<ProjectTechnology>({
  technology: {
    type: Types.ObjectId,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const ProjectTechnologyModel = model<ProjectTechnology>("ProjectTechnology", ProjectTechnologySchema);
