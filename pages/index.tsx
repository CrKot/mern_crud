import type { NextPage } from 'next';
import Head from 'next/head';
import { CreatePost, Post } from '../types/post';

import { TopBar } from "../components/TopBar";
import { ToDoInput } from "../components/ToDoInput";
import { ToDoPost } from "../components/ToDoPost";
import { useState } from "react";

const Home: NextPage = () => {

  const [data, setData] = useState([] as Post[]);
  const [editingItem, setEditingItem] = useState(false as Post | false);

  const addPost = (post: Post): void => {
    if (editingItem) {
      setEditingItem(false);
      data.forEach((item: Post) => {
        if (item.id === post.id) {
          item = post;
          return;
        }
      });
    } else {
      post.id = Date.now();
      data.push(post);
      setData([...data]);
    }
  };
  const editItem = (id: number): void => {
    const item: Post[] = data.filter((dataItem: Post) => dataItem.id === id);
    setEditingItem(item[0] as Post);
  };

  const removeItem = (id: number): void => {
    setData(data.filter((item: Post) => item.id !== id));
  };

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
        <ToDoInput addPost={ addPost } editingItem={ editingItem } />
        <ToDoPost data={ data } editItem={ editItem } removeItem={ removeItem } />
      </main>

      <footer className=''>
      </footer>
    </div>
  )
}

export default Home
