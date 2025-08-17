const preType = 'AUTH_';

export const AuthActionTypes = {
  SAVE_TOKEN: `${preType}SAVE_TOKEN`,
  CLIENT_LOGIN: `${preType}CLIENT_LOGIN`,
  CLIENT_LOGOUT: `${preType}CLIENT_LOGOUT`,
  CLIENT_REGISTER: `${preType}CLIENT_REGISTER`,
  SET_EMAIL: `${preType}SET_EMAIL`,
  SET_PASSWORD: `${preType}SET_PASSWORD`,
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

export const AuthActions = {
  saveToken: saveToken,
  clientLogin: clientLogin,
  setPassword: setPassword,
  setEmail: setEmail,
  clientRegister: clientRegister,
};
