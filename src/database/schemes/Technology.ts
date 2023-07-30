import {Schema, Document} from "mongoose";
import * as mongoose from "mongoose";

export type Technology = {
  name: string;
  description?: string;
  icon?: string;
  main: boolean;
} & Document;

export const TechnologySchema = new Schema<Technology>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  main: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export const TechnologyModel = mongoose.model<Technology>("Technology", TechnologySchema);
