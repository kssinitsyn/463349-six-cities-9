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
  changeActiveCardHandler: () => void,
  itemData: {
    bedrooms: number
    city: {
      location: {
        latitude: number
        longitude: number
        zoom: number
      }
      name: string
    }
    description: string
    goods: string[]
    host: {
      avatarUrl: string
      id: number
      isPro: boolean
      name: string
    }
    id: number
    images: string[]
    isFavorite: boolean
    isPremium: boolean
    location: {
      latitude: number
      longitude: number
      zoom: number
    }
    maxAdults: number
    previewImage: string
    price: number
    rating: number
    title: string
    type: string
  }
}

export type {PlacesType, PlaceListItem};
