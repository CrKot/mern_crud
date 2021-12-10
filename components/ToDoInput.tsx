import { NextPage } from "next";
import React, { useState} from "react";
import {number} from "prop-types";

interface Post {
  name: string,
  phone: string,
  text: string
}

export const ToDoInput: NextPage = ({addPost, editingItem = null}) => {
  const [post, setPost] = useState({
    id: number,
    name: '' as string,
    phone: '' as string,
    text: '' as string
  })
  if (editingItem) {
    setPost(editingItem)
  }
  const handlePost = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const fieldName = event.target.name as keyof Post
    post[fieldName] = event.target.value
      setPost({...post})
  }

  return (
    <div className='todo-input'>
      <form action="">
        <div className='todo-input__fields'>
          <div className='todo-input__field'>
            <div className='text'>Имя</div>
            <input
              onChange={handlePost}
              value={post.name}
              name='name'
              placeholder='Введите имя'
              maxLength={20}
            />
          </div>
          <div className='todo-input__field'>
            <div className='text'>Телефон</div>
            <input
              onChange={handlePost}
              value={post.phone}
              name='phone'
              placeholder='Введите телефон'
              maxLength={13}
            />
          </div>
        </div>
        <div className='todo-input__fields'>
          <div className='todo-input__field textarea'>
            <div className='text'>Заметка</div>
            <textarea onChange={handlePost} name='text' value={post.text} className='textarea' />
          </div>
            <button type="submit" className='todo-input__btn btn' onClick={(e) => {
              e.preventDefault()
              addPost(post)
              setPost({
                name: '',
                phone: '',
                text: ''
              })
            }}>
              <img src="success.svg" alt=""/>
            </button>
        </div>
      </form>
    </div>
  )
}
