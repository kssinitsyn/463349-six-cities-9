import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {MainPropsType} from './types/MainPropsType';
import {TabsType} from './types/TabsType';

import {PlaceList} from './mocks/placeCard';
import {FavoritesList} from './mocks/favorites';
import {FavoritesType} from './types/FavoritesType';
import { OfferList } from './mocks/offers';
import { OfferListType, PlaceListType } from './types/OfferType';
import { reviews } from './mocks/reviews';
import { ReviewsListType } from './types/ReviewsType';

const mainProps: MainPropsType & TabsType & FavoritesType & PlaceListType & OfferListType & ReviewsListType = {
  cityName: 'Amsterdam',
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
  placesList: [...PlaceList],
  ...FavoritesList,
  offers: [...OfferList],
  reviews: [...reviews],
};

ReactDOM.render(
  <React.StrictMode>
    <App {...mainProps}/>
  </React.StrictMode>,
  document.getElementById('root'));
