const preType = 'AUTH_';

export const AuthActionTypes = {
  SAVE_TOKEN: `${preType}SAVE_TOKEN`,
  CLIENT_LOGIN: `${preType}CLIENT_LOGIN`,
  CLIENT_LOGOUT: `${preType}CLIENT_LOGOUT`,
  CLIENT_REGISTER: `${preType}CLIENT_REGISTER`,
  SET_EMAIL: `${preType}SET_EMAIL`,
  SET_PASSWORD: `${preType}SET_PASSWORD`,
  GET_INFO: `${preType}GET_INFO`,
  SET_INFO: `${preType}SET_INFO`,
  SET_LOGGED_IN: `${preType}SET_LOGGED_IN`,

  ADD_TO_WISH_LIST: `${preType}ADD_TO_WISH_LIST`,
  SET_ADD_TO_WISH_LIST_LOADING: `${preType}SET_ADD_TO_WISH_LIST_LOADING`,
  REMOVE_FROM_WISH_LIST: `${preType}REMOVE_FROM_WISH_LIST`,
  GET_WISH_LIST: `${preType}GET_WISH_LIST`,
  SET_WISH_LIST: `${preType}SET_WISH_LIST`,
  SET_REMOVE_FROM_WISH_LIST_LOADING: `${preType}SET_REMOVE_FROM_WISH_LIST_LOADING`,
};

const saveToken = (data: { accessToken: string, tokenType: string }) => ({
  type: AuthActionTypes.SAVE_TOKEN,
  data: data,
});
const clientLogin = () => ({
  type: AuthActionTypes.CLIENT_LOGIN,
});
const clientRegister = () => ({
  type: AuthActionTypes.CLIENT_REGISTER,
});
const setEmail = (data: { email: string }) => ({
  type: AuthActionTypes.SET_EMAIL,
  data: data,
});
const setPassword = (data: { password: string }) => ({
  type: AuthActionTypes.SET_PASSWORD,
  data: data,
});

const getInfo = () => ({
  type: AuthActionTypes.GET_INFO,
});

const setLoggedIn = () => ({
  type: AuthActionTypes.SET_LOGGED_IN,
});

const addToWishList = (data: { productId: number }) => ({
  type: AuthActionTypes.ADD_TO_WISH_LIST,
  data: data,
});

const removeFromWishList = (data: { productId: number }) => ({
  type: AuthActionTypes.REMOVE_FROM_WISH_LIST,
  data: data,
});

const getWishList = () => ({
  type: AuthActionTypes.GET_WISH_LIST,
});

export const AuthActions = {
  saveToken: saveToken,
  clientLogin: clientLogin,
  setPassword: setPassword,
  setEmail: setEmail,
  clientRegister: clientRegister,
  getInfo: getInfo,
  setLoggedIn: setLoggedIn,
  addToWishList: addToWishList,
  removeFromWishList: removeFromWishList,
  getWishList: getWishList,
};
