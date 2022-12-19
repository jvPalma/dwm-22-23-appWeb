import { useEffect, useState } from 'react';
import axios from 'axios';
import { LS_AUTH_TOKEN } from './App';

function Dashboard({ logout }) {
  const [users, setUsers] = useState(null);
  const [myData, setMyData] = useState(null);
  const [authToken, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem(LS_AUTH_TOKEN);
    if (token) {
      setAuth(token);
    }
  }, []);

  const getAllUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api', {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setMyData(null);
      setUsers(res.data.users);
    } catch (err) {
      console.error(err);
    }
  };

  const getMyUserData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/me', {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      console.log(res);
      setUsers(null);
      setMyData(res.data.user);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={getMyUserData}>Get my user data</button>
      <button onClick={getAllUsers}>Get all users</button>
      <button onClick={logout}>Logout</button>
      {users && users.map((user) => <p>{user.username}</p>)}
      {myData && (
        <p>
          {myData.username} {myData.createdAt}
        </p>
      )}
    </div>
  );
}

export default Dashboard;
