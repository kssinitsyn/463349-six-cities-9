export type FavoritesType = {
  favoritesList: {
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
    goods: [string]
    host: {
      avatarUrl: string
      id: number
      isPro: boolean
      name: string
    }
    id: number
    images: [string]
    isFavorite: boolean
    isPremium: boolean
    location: {
      latitude: number
      longitude: number
      zoom: number
    }
    maxAdults: number
    previewImage: string
    price: number,
    priceText: string,
    rating: number
    title: string
    type: string
  }[]
}

export type FavoritesItemType = {
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
    goods: [string]
    host: {
      avatarUrl: string
      id: number
      isPro: boolean
      name: string
    }
    id: number
    images: [string]
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
    priceText: string
    rating: number
    title: string
    type: string
  }
}
