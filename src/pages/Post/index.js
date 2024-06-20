import "./Post.css";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from "json/posts.json";
import ModelPost from "components/ModelPost";

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => post.id === Number(params.id));

  if (!post) {
    <h1>Post não encontrado...</h1>;
  }

  return (
    <ModelPost
      coverPhoto={`/assets/posts/${post.id}/capa.png`}
      title={post.title}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.text}</ReactMarkdown>
      </div>
    </ModelPost>
  );
}
