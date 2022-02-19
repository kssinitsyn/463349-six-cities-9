import PlacesItem from '../PlacesItem/PlacesItem';
import {PlacesType} from '../../../types/PlacesType';

function PlacesList({placesList}: PlacesType) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {placesList.map((item) =>
        <PlacesItem key={item.id} itemData={item}/>)}
    </div>
  );
}

export default PlacesList;
