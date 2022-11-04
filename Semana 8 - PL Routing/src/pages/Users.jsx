import { Link } from 'react-router-dom';

function Users() {
  return (
    <div>
      <h2>All users</h2>
      <p>
        <Link to="/users/1">User 1</Link>
      </p>
      <p>
        <Link to="/users/2">User 2</Link>
      </p>
      <p>
        <Link to="/users/3">User 3</Link>
      </p>
    </div>
  );
}

export default Users;
