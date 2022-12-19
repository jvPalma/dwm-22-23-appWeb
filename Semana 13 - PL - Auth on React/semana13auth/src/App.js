import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';

export const LS_AUTH_TOKEN = 'AUTH_TOKEN';
const LOGIN_URL = 'http://localhost:3000/api/auth';

function App() {
  const [authToken, setAuthToken] = useState(null);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = loginData;

  useEffect(() => {
    const token = localStorage.getItem(LS_AUTH_TOKEN);
    if (token) {
      setAuthToken(token);
    }
  }, []);

  const onChangeInput = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(LOGIN_URL, loginData);
      //console.log(res);
      localStorage.setItem(LS_AUTH_TOKEN, res.data.token);
      setAuthToken(res.data.token);
    } catch (err) {
      console.error(err);
      //console.error(err.response.data);
    }
  };

  const logout = () => {
    localStorage.clear();
    setAuthToken(null);
  };

  return (
    <>
      {authToken ? (
        <Dashboard logout={logout} />
      ) : (
        <form onSubmit={onSubmitForm}>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={onChangeInput}
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={onChangeInput}
          />
          <input type="submit" value="Login" />
        </form>
      )}
    </>
  );
}

export default App;
