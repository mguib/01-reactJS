//jsx = JavaScript + xml (html)
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import './global.css'

import styles from './App.module.css';

export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author = "Marcos Guibson"
            content = "Lorem ipsum dolor sit amet consectrur"
          />
          <Post 
            author = " Guibson"
            content = "Um novo post muito legal"
          />
        </main>
      </div>

    </div>

  )
}

