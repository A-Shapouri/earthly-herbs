import { AuthActionTypes } from './auth-actions';
import { AuthReducerProps } from './auth';

export const initialState: AuthReducerProps = {
  isLoggedIn: false,
  email: '',
  password: '',
  singUpLoading: false,
};

function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case AuthActionTypes.CLIENT_LOGIN:
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

    default:
      return state;
  }
}

export default authReducer;
