import {Document} from "mongoose";

interface IPost extends Document {
  id: number,
  name: string,
  phone: string,
  text: string
}
