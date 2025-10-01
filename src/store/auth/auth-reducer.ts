import { AuthActionTypes } from './auth-actions';
import { AuthReducerProps } from './auth';

export const initialState: AuthReducerProps = {
  isLoggedIn: false,
  email: '',
  password: '',
  singUpLoading: false,
  firstName: '',
  lastName: '',
  imageUrl: '',
  activated: false,
  state: '',
  userId: '',
  langKey: 'en',
  favoriteProductId: '',
  addToWishListLoading: false,
  wishListLoading: false,
  wishList: [],
  removeFromWishListLoading: false,
  removeFromWishListId: '',
  loginLoading: false,
};

function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case AuthActionTypes.SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case AuthActionTypes.CLIENT_LOGOUT:
      return initialState;
    case AuthActionTypes.SET_EMAIL:
      return {
        ...state,
        email: action?.data?.email,
      };
    case AuthActionTypes.SET_PASSWORD:
      return {
        ...state,
        password: action?.data?.password,
      };
    case AuthActionTypes.CLIENT_REGISTER:
      return {
        ...state,
        singUpLoading: true,
      };
    case AuthActionTypes.SET_INFO:
      return {
        ...state,
        email: action?.data?.email,
        firstName: action?.data?.firstName,
        lastName: action?.data?.lastName,
        imageUrl: action?.data?.imageUrl,
        activated: action?.data?.activated,
        state: action?.data?.state,
        userId: action?.data?.id,
        langKey: action?.data?.langKey,
        isLoggedIn: true,
      };
    case AuthActionTypes.ADD_TO_WISH_LIST:
      return {
        ...state,
        favoriteProductId: action?.data?.productId,
        addToWishListLoading: true,
      };
    case AuthActionTypes.SET_ADD_TO_WISH_LIST_LOADING:
      return {
        ...state,
        addToWishListLoading: false,
        favoriteProductId: '',
      };
    case AuthActionTypes.REMOVE_FROM_WISH_LIST:
      return {
        ...state,
        removeFromWishListId: action?.data?.productId,
        removeFromWishListLoading: true,
      };
    case AuthActionTypes.GET_WISH_LIST:
      return {
        ...state,
        wishListLoading: true,
      };
    case AuthActionTypes.SET_WISH_LIST:
      return {
        ...state,
        wishListLoading: false,
        wishList: action?.data,
      };
    case AuthActionTypes.SET_REMOVE_FROM_WISH_LIST_LOADING:
      return {
        ...state,
        removeFromWishListLoading: false,
        removeFromWishListId: '',
      };
    case AuthActionTypes.CLIENT_LOGIN:
      return {
        ...state,
        loginLoading: true,
      };
    case AuthActionTypes.SET_LOGIN_LOADING:
      return {
        ...state,
        loginLoading: false,
      };
    default:
      return state;
  }
}

export default authReducer;
