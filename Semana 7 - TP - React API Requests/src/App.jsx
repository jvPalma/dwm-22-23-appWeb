/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";

// https://jsonplaceholder.typicode.com/posts
/**
 *
 * client - login page
 * cliente - POST request {username + password} -> envia para o servidor
 * servidor - recebe o pedido, e verifica se o user existe no sistema
 * servidor - se o user existir, cria um token, e devolve o token para o cliente
 * cliente - recebe a resposta do pedido POST com o token, e guarda o token [cookies, localStorage]
 *
 *
 *
 * GET
 * POST
 * PUT
 * DELETE
 *
 *
 * axios.get( 		url, options?)
 * axios.get( 		url, { headers: { Authorization: tokenValue }, param: { param1: valor1 } })
 * axios.post( 		url, payload , options?)
 * axios.put( 		url, payload , options?)
 * axios.delete( 	url, payload , options?)
 *
 * https://jsonplaceholder.typicode.com/posts
 */

const App = () => {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await axios.get(url);

    if (!res) return;
    setPosts(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ padding: "20px, 80px" }}>
      <h1>API Requests aula</h1>
      {posts.map((item) => (
        <p key={item.id}>{item.body}</p>
      ))}

      <button
        onClick={() => {
          getData();
        }}
      >
        fetch data
      </button>
    </div>
  );
};

export default App;

// -----  npm i -s axios

// -----  npm install --save axios
