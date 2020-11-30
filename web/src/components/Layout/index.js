import { ThemeProvider } from 'styled-components';
import UserProvider from '../../context/user';
import GlobalStyles from '../../styles/global';

import useTheme from '../../utils/useTheme';

import Routes from '../../routes/';

const Layout = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <GlobalStyles />
        <Routes />
      </UserProvider>
    </ThemeProvider>
  );
};

export default Layout;
