import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {MainPropsType} from './types/MainPropsType';
import {TabsType} from './types/TabsType';
import {PlacesType} from './types/PlacesType';

import {PlaceList} from './mocks/offers';
import {FavoritesList} from './mocks/favorites';
import {FavoritesType} from './types/FavoritesType';

const mainProps: MainPropsType & TabsType & PlacesType & FavoritesType = {
  city: 'Amsterdam',
  places: 312,
  tabs: [
    {
      name: 'Paris',
      isActive: false,
    },
    {
      name: 'Cologne',
      isActive: false,
    },
    {
      name: 'Brussels',
      isActive: false,
    },
    {
      name: 'Amsterdam',
      isActive: true,
    },
    {
      name: 'Hamburg',
      isActive: false,
    },
    {
      name: 'Dusseldorf',
      isActive: false,
    },
  ],
  isLogin: true,
  ...PlaceList,
  ...FavoritesList,
};

ReactDOM.render(
  <React.StrictMode>
    <App {...mainProps}/>
  </React.StrictMode>,
  document.getElementById('root'));
