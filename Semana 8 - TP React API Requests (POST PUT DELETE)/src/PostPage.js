import { useParams } from "react-router-dom";

function PostPage() {
  const { example } = useParams();

  return <div>PostPage {example}</div>;
}

export default PostPage;
