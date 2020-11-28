import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';

import useTheme from '../../utils/useTheme';

import Routes from '../../routes';

const Layout = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default Layout;
