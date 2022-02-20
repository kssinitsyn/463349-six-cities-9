import {Navigate} from 'react-router-dom';
import {MainPropsType} from '../../types/MainPropsType';
import {AppRoute} from '../../types/AppRoute';

type PrivateRouteProps = MainPropsType & {
  component: JSX.Element
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {isLogin, component} = props;

  return (
    isLogin
      ? component
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
