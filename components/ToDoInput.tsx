import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Post, CreatePost } from '../types/post'
import { PropsInput } from '../types/props'

export const ToDoInput: NextPage<PropsInput> = ({ addPost, editingItem }) => {
  const [post, setPost] = useState({
    name: '',
    phone: '',
    text: ''
  } as Post)

  useEffect(() => {
    if (editingItem) {
      setPost(editingItem)
    }
  })
  const handlePost = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const fieldName = event.target.name as keyof CreatePost
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
              required={true}
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
              required={true}
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
              } as Post)
            }}>
              <img src="success.svg" alt=""/>
            </button>
        </div>
      </form>
    </div>
  )
}
