import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
