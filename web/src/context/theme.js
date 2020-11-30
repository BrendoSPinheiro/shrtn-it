import { createContext } from 'react';

import usePersistState from '../utils/usePersistState';

import Dark from '../styles/themes/dark';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = usePersistState('@shrtn.it:theme', Dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
