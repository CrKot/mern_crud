import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { TopBar} from "../components/TopBar";
import { ToDoInput } from "../components/ToDoInput"
import { ToDoForm} from "../components/ToDoForm";

const Home: NextPage = () => {
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
        <ToDoInput />
        <ToDoForm />
      </main>

      <footer className=''>
      </footer>
    </div>
  )
}

export default Home
