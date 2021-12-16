import type { NextPage } from 'next';
import { useSelector } from "react-redux";
import Head from 'next/head';
import { Post } from '../types/post';

import { TopBar } from "../components/TopBar";
import { ToDoInput } from "../components/ToDoInput";
import { ToDoPost } from "../components/ToDoPost";
import { useEffect, useState } from "react";

import store from '../store/index'
import { getPosts, addedPost, deletedPost, editedPost } from "../store/actions";

const Home: NextPage = () => {

  const [data, setData] = useState(store.getState() as Post[]);
  const [editingItem, setEditingItem] = useState(false as Post | false);
  const posts = useSelector(state => state)

  useEffect( (): void => {
    setData(posts)
  })
  const addPost = (post: Post): void => {
    if (editingItem) {
      setEditingItem(false);
      store.dispatch(editedPost(post._id))
        .then((post: Post) => {
          data.forEach((item: Post) => {
            if (item._id === post._id) {
              item = { ...post };
              return;
            }
          });
        })
        .catch((err: string) => console.log(err))
    } else {
      store.dispatch(addedPost(post))
        .then((post: Post[]) => setData([...data, ...post]))
        .catch((err: string) => console.log(err))
    }
  };
  const editItem = (_id: string): void => {
    const item: Post[] = data.filter((dataItem: Post) => dataItem._id === _id);
    setEditingItem(item[0] as Post);
  };

  const removeItem = (_id: string): void => {
    store.dispatch(deletedPost(_id))
      .then(() => {
        const newDataList = data.filter((item: Post) => item._id !== _id)
        setData(newDataList);
      })
      .catch((err: string) => console.log(err))
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
