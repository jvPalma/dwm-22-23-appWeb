import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(res.data);
      setUsers(res.data);
    } catch (err) {
      alert('Erro ao comunicar com o servidor');
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
