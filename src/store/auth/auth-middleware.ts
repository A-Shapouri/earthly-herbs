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
import addToWishListApi from '@api/wish-list/create';
import getWishListApi from '@api/wish-list/list';
import removeFromWishListApi from '@api/wish-list/delete';

function* clientLoginWatcher() {
  const { email, password } = yield select(authStore);
  const { navigation, lang } = yield select(navigationStore);
  try {
    const response: {id_token: string, user_id: string} = yield loginApi({
      email: email,
      password: password,
    });

    yield saveToCookie('token', response.id_token);
    yield saveToCookie('user_id', response.user_id);

    yield put({
      type: AuthActionTypes.GET_INFO,
    });

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
        text: 'Something went wrong',
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
    console.log(response);
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

function* addToWishListWatcher() {
  const { favoriteProductId, userId } = yield select(authStore);
  try {
    yield addToWishListApi({
      productId: favoriteProductId,
      customerId: userId,
    });
    yield put({
      type: AuthActionTypes.SET_ADD_TO_WISH_LIST_LOADING,
    });
    yield put({
      type: AlertActionType.SHOW_ALERT,
      data: {
        text: 'Added to Wish List!',
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

function* getWishListWatcher() {
  try {
    const response = yield getWishListApi({
      page: 0,
      sort: 'id,desc',
      perPage: 20,
    });
    console.log(response);
    yield put({
      type: AuthActionTypes.SET_WISH_LIST,
      data: response?.data,
    });
    yield put({
      type: AlertActionType.SHOW_ALERT,
      data: {
        text: 'Added to Wish List!',
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

function* removeFromWishListWatcher() {
  const { removeFromWishListId } = yield select(authStore);
  try {
    yield removeFromWishListApi({
      id: removeFromWishListId,
    });
    yield put({
      type: AuthActionTypes.SET_REMOVE_FROM_WISH_LIST_LOADING,
    });
    yield put({
      type: AlertActionType.SHOW_ALERT,
      data: {
        text: 'Removed from Wish List!',
        severity: 'success',
      },
    });
    yield put({
      type: AuthActionTypes.GET_WISH_LIST,
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
    takeLatest(AuthActionTypes.ADD_TO_WISH_LIST, addToWishListWatcher),
    takeLatest(AuthActionTypes.GET_WISH_LIST, getWishListWatcher),
    takeLatest(AuthActionTypes.REMOVE_FROM_WISH_LIST, removeFromWishListWatcher),
  ]);
}

export default authMiddleware;
