import { Post } from './post'

export interface PropsPost {
  data: Post[],
  editItem: (id: string) => void,
  removeItem: (id: string) => void

}

export interface PropsInput {
  addPost: (arg: Post) => void,
  editingItem: false | Post,
}
