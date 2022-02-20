import {Navigate} from 'react-router-dom';
import {MainPropsType} from '../../types/MainPropsType';
import {AppRoute} from '../../types/AppRoute';

type PrivateRouteProps = MainPropsType & {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {isLogin, children} = props;

  return (
    isLogin
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
