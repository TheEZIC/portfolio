import {Schema, Document, Types, model} from "mongoose";
import {Technology} from "./Technology";

export type About = {
  title: string;
  text: string;
  technologies: Technology;
} & Document;

export const AboutSchema = new Schema<About>({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  technologies: [{
    type: Types.ObjectId,
    ref: "Technology",
  }],
});

export const AboutModel = model<About>("About", AboutSchema);
