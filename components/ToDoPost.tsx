import { NextPage } from "next";
import { Post } from '../types/post'

export const ToDoPost: NextPage = ({data, editItem, removeItem}) => {
  return (
    <div className='todo-post'>
      {data && data.map((item: Post) => {
        return (
          <div key={item.id} className='todo-post__item'>
            <div className='name'>{item.name}</div>
            <div className='phone'>{item.phone}</div>
            <div className='text'>{item.text}</div>
            <div className='todo-post__btn-block'>
              <button
                className='todo-post__btn-delete btn'
                onClick={ () => removeItem(item.id) }
              >X
              </button>
              <button className='todo-post__btn-pen btn' onClick={ () => editItem(item.id)}>
                <img src='pen.svg' alt=''/>
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
