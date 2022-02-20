import {Route, BrowserRouter, Routes} from 'react-router-dom';

import MainScreen from '../screens/MainScreen/MainScreen';
import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreen';
import PropertyScreen from '../screens/PropertyScreen/PropertyScreen';

import {AppRoute} from '../../types/AppRoute';

import {MainPropsType} from '../../types/MainPropsType';
import {TabsType} from '../../types/TabsType';
import {PlacesType} from '../../types/PlacesType';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import NotFoundScreen from '../screens/NotFoundScreen/NotFoundScreen';

function App(props: MainPropsType & TabsType & PlacesType): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen {...props} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesScreen />}
        />
        <Route
          path={AppRoute.Offer}
          element={<PropertyScreen {...props}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Any}
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
