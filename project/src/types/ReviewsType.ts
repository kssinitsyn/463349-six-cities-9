export type ReviewsListType = {
  reviews: ReviewsItemType[]
}

export type ReviewsItemType = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
}
