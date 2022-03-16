import React from 'react';
import Map from '../../Map/Map';
import { OfferListType } from '../../../types/OfferType';

function PropertyMap({offers}: OfferListType) {
  return (
    <Map offers={offers}/>
  );
}

export default PropertyMap;
