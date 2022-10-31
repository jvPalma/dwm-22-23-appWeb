import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const postURL = "https://jsonplaceholder.typicode.com/posts";

const PostPage = () => {
  const [userId, setUserId] = useState(3);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editPost, setEditPost] = useState(null);

  const { batata } = useParams();
  // batata se tiver valor = EDIT MODE
  // batata se NAO tiver valor = CREATE MODE

  const getData = async (postId) => {
    try {
      const { data } = await axios.get(postURL + "/" + postId);
      setEditPost(data);
      setUserId(data.userId);
      setTitle(data.title);
      setBody(data.body);
    } catch (err) {
      alert("Erro ao comunicar com o servidor");
      console.error(err);
    }
  };

  useEffect(() => {
    batata && getData(batata);
  }, [batata]);

  const handleSubmit = async () => {
    const payload = {
      userId,
      title,
      body,
    };

    if (editPost) {
      const { data } = await axios.put(postURL + "/" + batata, payload);
      console.log("EDITED", data);
    } else {
      const { data } = await axios.post(postURL, payload);
      console.log("NEW", data);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>{editPost != null ? "EDIT POST: " + batata : "NEW POST"}</h2>
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
        {
          /** editPost true =  EDIT  */
          /** editPost false =  CREATE  */
          !editPost && (
            <>
              <p>user ID</p>
              <input
                type="number"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </>
          )
        }
        <br />
      </>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PostPage;
