export interface AuthReducerProps {
  isLoggedIn: boolean
  email: string
  password: string
  singUpLoading: boolean
  firstName: string
  lastName: string
  imageUrl: string
  activated: boolean
  state: string
  userId: string
  langKey: string
  favoriteProductId: string
  addToWishListLoading: boolean
  wishListLoading: boolean
  wishList: any[]
  removeFromWishListLoading: boolean
  removeFromWishListId: string
}
