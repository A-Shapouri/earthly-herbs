import { all, put, takeLatest, select } from 'redux-saga/effects';
import { AuthActionTypes } from '@store/auth/auth-actions';
import { removeFromCookie, saveToCookie } from '@utils/helpers/cookie';
import { AlertActionType } from '@store/alert/alert-action';
import registerApi from '@api/auth/register';
import { authStore } from './auth-store';
import loginApi from '@api/auth/login';
import { navigationStore } from '@store/navigation/navigation-store';
import routes from '@routes';
import getParseRoute from '@utils/helpers/parse-route';
import getInfoApi from '@api/auth/get-info';

function* clientLoginWatcher() {
  const { email, password } = yield select(authStore);
  const { navigation, lang } = yield select(navigationStore);
  try {
    const response: {id_token: string, user_id: string} = yield loginApi({
      email: email,
      password: password,
    });

    saveToCookie('token', response.id_token);
    saveToCookie('user_id', response.user_id);

    navigation.push(getParseRoute({
      pathname: routes['route.home.index'],
      locale: lang,
    }));
    yield put({
      type: AlertActionType.SHOW_ALERT,
      data: {
        text: 'Welcome To EARTHLY HERBS!',
        severity: 'success',
      },
    });
  } catch (error: any) {
    yield put({
      type: AlertActionType.SHOW_ALERT,
      data: {
        text: error?.message || 'Something went wrong',
        description: 'Please try again later',
        severity: 'danger',
      },
    });
  }
}

function* clientRegisterWatcher() {
  const { email, password } = yield select(authStore);
  try {
    const response = yield registerApi({
      email: email,
      password: password,
    });
    console.log(response);
    yield put({
      type: AlertActionType.SHOW_ALERT,
      data: {
        text: 'Welcome To EARTHLY HERBS!',
        severity: 'success',
      },
    });
  } catch (error: any) {
    yield put({
      type: AlertActionType.SHOW_ALERT,
      data: {
        text: error?.message || 'Something went wrong',
        description: 'Please try again later',
        severity: 'danger',
      },
    });
  }
}

function* clientLogoutWatcher() {
  try {
    removeFromCookie('token');
    yield put({
      type: AlertActionType.SHOW_ALERT,
      data: {
        text: 'So Sad To See You Leave!',
        severity: 'danger',
      },
    });
  } catch (error: any) {
  }
}

function* getInfoWatcher() {
  try {
    const response = yield getInfoApi();

    yield put({
      type: AuthActionTypes.SET_INFO,
      data: response,
    });
  } catch (error: any) {
    yield put({
      type: AlertActionType.SHOW_ALERT,
      data: {
        text: error?.message || 'Something went wrong',
        description: 'Please try again later',
        severity: 'danger',
      },
    });
  }
}

function* authMiddleware() {
  yield all([
    takeLatest(AuthActionTypes.CLIENT_LOGIN, clientLoginWatcher),
    takeLatest(AuthActionTypes.CLIENT_LOGOUT, clientLogoutWatcher),
    takeLatest(AuthActionTypes.CLIENT_REGISTER, clientRegisterWatcher),
    takeLatest(AuthActionTypes.GET_INFO, getInfoWatcher),
  ]);
}

export default authMiddleware;
