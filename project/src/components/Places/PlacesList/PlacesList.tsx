import PlacesItem from '../PlacesItem/PlacesItem';

type mainPropsType = {
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

function PlacesList({placesList}: mainPropsType) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {placesList.map((item) => <PlacesItem key={item.id} itemData={item}/>)}
    </div>
  );
}

export default PlacesList;
