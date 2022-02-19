type PlacesType = {
  placesList: {
      id: number,
      isFavorite: boolean,
      isPremium: boolean,
      previewImage: string,
      price: number,
      priceText: string,
      rating: number,
      title: string,
      type: string,
    }[]
};

type PlaceListItem = {
  itemData: {
    id: number,
    isFavorite: boolean,
    isPremium: boolean,
    previewImage: string,
    price: number,
    priceText: string,
    rating: number,
    title: string,
    type: string,
  }
}

export type {PlacesType, PlaceListItem};
