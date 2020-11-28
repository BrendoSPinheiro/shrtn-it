import Layout from './components/Layout';

import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

import 'moment/locale/pt-br';
import moment from 'moment';

import { ThemeProvider as ThemeConsumer } from './context/theme';

function App() {
  moment.locale('pt-br');
  return (
    <ThemeConsumer>
      <Layout />
    </ThemeConsumer>
  );
}

export default App;
