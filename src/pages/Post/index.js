import "./Post.css";
import styles from "./Post.module.css";
import { Route, Routes, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from "json/posts.json";
import ModelPost from "components/ModelPost";
import DefaultPage from "components/DefaultPage";
import NotFound from "pages/NotFound";
import PostCard from "components/PostCard";

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => post.id === Number(params.id));

  if (!post) {
    return <NotFound />;
  }

  const recommendedPosts = posts
    .filter((post) => post.id !== Number(params.id))
    .sort((a, b) => a.id - b.id)
    .slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <ModelPost
              coverPhoto={`/assets/posts/${post.id}/capa.png`}
              title={post.title}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.text}</ReactMarkdown>
              </div>
              <h2 className={styles.titleOtherPosts}>
                Outros posts que você pode gostar:
              </h2>
              <ul className={styles.recommendedPosts}>
                {recommendedPosts.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </ModelPost>
          }
        />
      </Route>
    </Routes>
  );
}
