import { Request, Response } from 'express'
import { errorMap } from '../utils/errorMap'
import { PostModel } from '../models/PostModel'

import { IPost } from "../types/IPost";

interface PostInterface {
  id?: number,
  name: string,
  phone: string,
  text: string
}

export class Post {
  static async getFormsList(req: Request, res: Response): Promise<void> {
    PostModel.find()
      .then((posts: Array<IPost>) => res.send(posts))
      .catch(() => res.send(errorMap.getFail))

  };

  static async addForm(req: Request, res: Response): Promise<void> {
    const newPost = req.body as PostInterface;
    PostModel.create(newPost)
      .then((post: IPost) => res.send(post))
      .catch(() => res.send(errorMap.addFail));

  };

  static async editForm(req: Request, res: Response): Promise<void> {
    const postId = { _id: req.params.id };
    const editingPost = req.body as PostInterface;
    PostModel.findOne(postId)
      .then((post) => {
        const keys = Object.keys(req.body) as Array <keyof PostInterface>;
        keys.forEach((key: string) => post[key] = editingPost[key]);
        return post
      })
      .then((updatePost: IPost) => {
        return new PostModel(updatePost).save()
      })
      .then((post: IPost) => res.send(post))
      .catch(() =>  res.send(errorMap.editFail));

  };
  static async deleteForm(req: Request, res: Response): Promise<void> {
    const postId = { _id: req.params.id };
    PostModel.deleteOne(postId)
      .then(() => res.send('success'))
      .catch(() => res.send(errorMap.deleteFail));

  };
}
