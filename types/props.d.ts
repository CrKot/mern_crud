import { Post, CreatePost } from './post'

export interface PropsPost {
  data: Post[],
  editItem: (id: number) => void,
  removeItem: (id: number) => void

}

export interface PropsInput {
  addPost: (arg: Post) => void,
  editingItem: false | Post,
}
