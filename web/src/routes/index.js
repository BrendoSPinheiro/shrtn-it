import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import RouteWrapper from './Router';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import UrlNotFound from '../pages/UrlNotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper exact path="/">
          <Redirect to="/login" />
        </RouteWrapper>
        <RouteWrapper exact path="/login" component={Login} />
        <RouteWrapper exact path="/register" component={Register} />
        <RouteWrapper isPrivate exact path="/dashboard" component={Dashboard} />
        <RouteWrapper exact path="/urlnotfound" component={UrlNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
