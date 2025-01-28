import {AuthActionTypes} from './auth-actions';
import {AuthReducerProps} from './auth'

export const initialState: AuthReducerProps = {
  isLoggedIn: false,
  email: '',
  password: '',
};

function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case AuthActionTypes.CLIENT_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        email: initialState.email,
        password: initialState.password,
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

    default:
      return state;
  }
}

export default authReducer;
