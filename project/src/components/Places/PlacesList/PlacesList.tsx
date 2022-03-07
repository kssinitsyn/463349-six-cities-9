import PlacesItem from '../PlacesItem/PlacesItem';
import {PlacesType} from '../../../types/PlacesType';
import { useState } from 'react';

function PlacesList({placesList}: PlacesType) {
  const [activeCardId, setActiveCardId] = useState<null | number>(null);
  const handlerChangeActiveCard = (id: number) => () => {
    setActiveCardId(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {activeCardId}
      {placesList.map((item) =>
        <PlacesItem key={item.id} itemData={item} changeActiveCardHandler={handlerChangeActiveCard(item.id)}/>)}
    </div>
  );
}

export default PlacesList;
