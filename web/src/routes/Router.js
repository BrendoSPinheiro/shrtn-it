import { Redirect, Route } from 'react-router-dom';

import PropTypes from 'prop-types';

import useUser from '../utils/useUser';

const RouteWrapper = ({
  redirectTo,
  isPrivate,
  component: Component,
  ...rest
}) => {
  const { user } = useUser();

  const { token } = user;

  if (!token && isPrivate) return <Redirect to={redirectTo} />;

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

RouteWrapper.propTypes = {
  redirectTo: PropTypes.string,
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

RouteWrapper.defaultProps = {
  redirectTo: '/login',
  isPrivate: false,
};

export default RouteWrapper;
