import { useContext } from 'react';
import { UserContext } from '../context/user';

const UseUser = () => {
  const context = UserContext(useContext);

  if (!context) throw new Error('userContext must be used within a useUser');

  const { user, setUser } = context;

  return { user, setUser };
};

export default UseUser;
