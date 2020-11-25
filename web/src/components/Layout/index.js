import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../styles/global';
import { FiUnlock as SearchIcon } from 'react-icons/fi';
import Button from '../../components/Button';
import Title from '../../components/Title';
import InputForm from '../../components/InputForm';
import ToggleTheme from '../../components/ToggleTheme';
import useTheme from '../../utils/useTheme';

const Layout = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button icon={<SearchIcon />} fullWidth size="medium">
        Click-me
      </Button>
      <Title color="purple">Title</Title>
      <InputForm type="email" icon={<SearchIcon />}>
        Email
      </InputForm>
      <ToggleTheme />
    </ThemeProvider>
  );
};

export default Layout;
