import $http from "../../api/api";
import { Post } from "../../types/post";

// DELETE ANY
export const getPosts = () => async (dispatch: any): Promise<Post[] | string> => {
  const body = await $http.get();
  if (!body.error) {
    dispatch({
      type: 'GET_POSTS',
      payload: body as Post[]
    })
    return Promise.resolve(body)
  }
  return Promise.reject(body.error)
}

export const addedPost = (post: Post) => async (dispatch: any): Promise<Post[] | string> => {
  const body = await $http.add(post);
  if (!body.error) {
    dispatch({
      type: 'ADD_POST',
      payload: body as Post[]
    })
    return Promise.resolve(body)
  }
  return Promise.reject(body.error)
}

export const editedPost = (_id: string) => async (dispatch: any): Promise<Post | string> => {
  const body = await $http.edit(_id)
  if (!body.error) {
    dispatch({
      type: 'EDITED_POST',
      payload: body as Post[]
    })
    return Promise.resolve(body)
  }
  return Promise.reject(body.error)
}

export const deletedPost = (_id: string) => async (dispatch: any): Promise<string> => {
  const body = await $http.delete(_id)
  if (!body.error) {
    dispatch({
      type: 'DELETED_POST',
      payload: body as Post[]
    })
    return Promise.resolve(body)
  }
  return Promise.reject(body.error)
}
