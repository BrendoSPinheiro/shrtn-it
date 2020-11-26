import Layout from './components/Layout';

import { ThemeProvider as ThemeConsumer } from './context/theme';

function App() {
  return (
    <ThemeConsumer>
      <Layout />
    </ThemeConsumer>
  );
}

export default App;
