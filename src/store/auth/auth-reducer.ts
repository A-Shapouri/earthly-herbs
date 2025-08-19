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
};

function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case AuthActionTypes.SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case AuthActionTypes.CLIENT_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
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
      };
    default:
      return state;
  }
}

export default authReducer;
