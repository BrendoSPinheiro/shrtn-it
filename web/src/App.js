import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ThemeConsumer } from './context/theme';
import Dark from './styles/themes/dark';
import GlobalStyles from './styles/global';
import { FiSearch as SearchIcon } from 'react-icons/fi';

import Button from './components/Button';
import Title from './components/Title';

function App() {
  return (
    <ThemeConsumer>
      <ThemeProvider theme={Dark}>
        <GlobalStyles />
        <Button icon={<SearchIcon />} fullWidth size="medium">
          Click-me
        </Button>
        <Title color="purple">Title</Title>
      </ThemeProvider>
    </ThemeConsumer>
  );
}

export default App;
