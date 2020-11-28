import { useContext } from 'react';

import { ThemeContext } from '../context/theme';

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('themeUser must be used whitin a useTheme');

  const { theme, setTheme } = context;

  return { theme, setTheme };
};

export default useTheme;
