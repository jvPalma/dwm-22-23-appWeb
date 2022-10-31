import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const postURL = "https://jsonplaceholder.typicode.com/posts";

const PostPage = () => {
  const [userId, setUserId] = useState(3);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { batata } = useParams();

  const handleSubmit = async () => {
    const payload = {
      userId,
      title,
      body,
    };

    const { data } = await axios.post(postURL, payload);
    console.log(data);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>PostPage {batata}</h2>
      <>
        <p>title</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <p>Body</p>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />

        <p>user ID</p>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
      </>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PostPage;
