import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return (
    <div>
      <h2>User with id: {id}</h2>
    </div>
  );
}

export default User;
