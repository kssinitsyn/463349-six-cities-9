import React from 'react';
import PlacesSort from './PlacesSort/PlacesSort';
import PlacesList from './PlacesList/PlacesList';
import {MainPropsType} from '../../types/MainPropsType';
import {PlacesType} from '../../types/PlacesType';

function Places({cityName, places, placesList}: MainPropsType & PlacesType) {
  return (
    <React.Fragment>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{places} places to stay in {cityName}</b>
      <PlacesSort />
      <PlacesList placesList={placesList}/>
    </React.Fragment>
  );
}

export default Places;
