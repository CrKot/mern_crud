import type { NextPage } from 'next'
import Head from 'next/head'
import { Post } from '../types/post'

import { TopBar } from "../components/TopBar";
import { ToDoInput } from "../components/ToDoInput"
import { ToDoPost } from "../components/ToDoPost";
import { useState } from "react";

const Home: NextPage = () => {

  const addPost = (post) => {
    post.id = new Date()
    data.push(post)
    setData([...data])
  }
  const editItem = (id: number) => {
    // editingItem({})
  }

  const removeItem = (id: number): void => {
    setData(data.filter((item: Post) => item.id !== id))
  }

  const [data, setData] = useState([])
  return (
    <div>
      <Head>
        <title>MERN</title>
        <meta name="mern" content="crud" />
        <link rel="icon" href="/cat-icon.svg" />
      </Head>
        <header>
          <TopBar />
        </header>

      <main className='container'>
        <ToDoInput addPost={addPost} editingItem={editingItem}/>
        <ToDoPost data={data} editItem={editItem} removeItem={removeItem}/>
      </main>

      <footer className=''>
      </footer>
    </div>
  )
}

export default Home
