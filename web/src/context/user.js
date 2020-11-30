import { createContext } from 'react';

import usePersistState from '../utils/usePersistState';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = usePersistState('@shrtn.it:user', {});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
