import { ThemeProvider } from 'styled-components';
import Dark from './styles/themes/dark';
import GlobalStyles from './styles/global';
function App() {
  return (
    <>
      <ThemeProvider theme={Dark}>
        <GlobalStyles />
        <h1>Hello World</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
