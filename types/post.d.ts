export interface CreatePost {
  name: string,
  phone: string,
  text: string
}

export interface Post extends CreatePost {
  id: number
}
