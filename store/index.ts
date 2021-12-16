import { applyMiddleware ,createStore } from 'redux'
import thunk from "redux-thunk";
import { Post } from "../server/controllers/Post";

const initialState = [] as Post[]
const postReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_POSTS':
      return [...payload]
    case 'ADD_POST':
      return [...payload]
    case 'EDIT_POST':
      return [...payload]
    case 'DELETE_POST':
      return [...payload]
    default:
      return initialState
  }
}

const store = createStore(postReducer, initialState, applyMiddleware(thunk));

export default store;
