// Components
import Post from "./components/Post";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// CSS MODULE
import styles from "./App.module.css";

// CSS GLOBAL
import "./globals.css";

const data = [
  {
    id: 1,
    titlePost: "Novo na comunidade"
    ,
    author: {
      avatarUrl: "https://github.com/andreymateus.png",
      name: "Andrey Mateus",
      role: "Desenvolvedor Web Front-End"
    },
    content: [
      { type: "paragraph", content: "Falaa galera" },
      { type: "paragraph", content: "Acabei de subir um projeto no meu portifa. E um projeto novo." },
      { type: "link", content: "https://github.com/andreymateus" }
    ],
    publishedAt: new Date("2025-02-27 20:00:00")
  },
  {
    id: 2,
    titlePost: "Já usaram DOM ?",
    author: {
      avatarUrl: "https://github.com/user.png",
      name: "Random User",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Primeira vez aqui" },
      { type: "paragraph", content: "Gostaria de novas dicas sobre o front-end." },
      { type: "link", content: "" }
    ],
    publishedAt: new Date("2025-02-20 15:00:00")
  }
];

interface Comment {
  avatarUrl: string,
  content: string,
}

const comments: Comment[] = [];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar
          urlBackgroundImage={"https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          avatarUrl={"https://github.com/andreymateus.png"}
          nameUser={"Andrey Mateus"}
          roleUser={"Web Developer"}
        />

        <main>
          {data.map(post => {
            return (
              <Post
                key={post.id}
                avatar={post.author.avatarUrl}
                author={post.author.name}
                subtitle={post.author.role}
                titlePost={post.titlePost}
                content={post.content}
                publishedAt={new Date()}
                comments={comments}
              />
            );
          })}
        </main>
      </div>

    </div>
  );
}

export default App;