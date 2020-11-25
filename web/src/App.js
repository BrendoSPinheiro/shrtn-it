import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ThemeConsumer } from './context/theme';
import Dark from './styles/themes/dark';
import GlobalStyles from './styles/global';

import Header from './components/Header';

function App() {
  return (
    <ThemeConsumer>
      <ThemeProvider theme={Dark}>
        <GlobalStyles />
        <Header />
      </ThemeProvider>
    </ThemeConsumer>
  );
}

export default App;
