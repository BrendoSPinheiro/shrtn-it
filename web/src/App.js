import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ThemeConsumer } from './context/theme';
import Dark from './styles/themes/dark';
import GlobalStyles from './styles/global';
import { FiUnlock as SearchIcon } from 'react-icons/fi';

import Button from './components/Button';
import Title from './components/Title';
import InputForm from './components/InputForm';

function App() {
  return (
    <ThemeConsumer>
      <ThemeProvider theme={Dark}>
        <GlobalStyles />
        <Button icon={<SearchIcon />} fullWidth size="medium">
          Click-me
        </Button>
        <Title color="purple">Title</Title>
        <InputForm type="email" icon={<SearchIcon />}>
          Email
        </InputForm>
      </ThemeProvider>
    </ThemeConsumer>
  );
}

export default App;
