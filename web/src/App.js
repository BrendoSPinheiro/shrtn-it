import Layout from './components/Layout';

import { ThemeProvider as ThemeConsumer } from './context/theme';

import 'react-toggle/style.css';
function App() {
  return (
    <ThemeConsumer>
      <Layout />
    </ThemeConsumer>
  );
}

export default App;
