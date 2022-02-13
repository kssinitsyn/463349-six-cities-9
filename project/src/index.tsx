import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

type mainPropsType = {
  city: string,
  places: number,
  isLogin: boolean,
  tabs:
    {
      name: string,
      isActive: boolean
    }[],
  placesList:
    {
      id: number,
      isFavorite: boolean,
      isPremium: boolean,
      previewImage: string,
      price: number,
      priceText: string,
      rating: number,
      title: string,
      type: string,
    }[],
};

const mainProps: mainPropsType = {
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
  placesList: [
    {
      id: 1,
      isFavorite: true,
      isPremium: true,
      previewImage: 'img/apartment-01.jpg',
      price: 120,
      priceText: 'night',
      rating: 1.5,
      title: 'Beautiful & luxurious studio at great location',
      type: 'apartment',
    },
    {
      id: 2,
      isFavorite: false,
      isPremium: false,
      previewImage: 'img/room.jpg',
      price: 80,
      priceText: 'night',
      rating: 4.4,
      title: 'Wood and stone place',
      type: 'Private room',
    },
    {
      id: 3,
      isFavorite: false,
      isPremium: false,
      previewImage: 'img/apartment-02.jpg',
      price: 132,
      priceText: 'night',
      rating: 2.1,
      title: 'Canal View Prinsengracht',
      type: 'apartment',
    },
    {
      id: 4,
      isFavorite: true,
      isPremium: true,
      previewImage: 'img/apartment-03.jpg',
      price: 180,
      priceText: 'night',
      rating: 5,
      title: 'Nice, cozy, warm big bed apartment',
      type: 'Apartment',
    },
    {
      id: 5,
      isFavorite: false,
      isPremium: false,
      previewImage: 'img/room.jpg',
      price: 80,
      priceText: 'night',
      rating: 3.6,
      title: 'Wood and stone place',
      type: 'Private room',
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <App {...mainProps}/>
  </React.StrictMode>,
  document.getElementById('root'));
