import React from 'react';
import PlacesSort from './PlacesSort/PlacesSort';
import PlacesList from './PlacesList/PlacesList';

type mainPropsType = {
  city: string,
  places: number,
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

function Places({city, places, placesList}: mainPropsType) {
  return (
    <React.Fragment>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{places} places to stay in {city}</b>
      <PlacesSort />
      <PlacesList placesList={placesList}/>
    </React.Fragment>
  );
}

export default Places;
