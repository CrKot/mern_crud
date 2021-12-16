import { model, Schema, Model } from "mongoose";
import { IPost } from "../types/IPost";

const PostSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false
  }
})

export const PostModel: Model<IPost> = model('post', PostSchema)
