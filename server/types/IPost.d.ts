import {Document} from "mongoose";

interface IPost extends Document {
  _id: string,
  name: string,
  phone: string,
  text: string
}
