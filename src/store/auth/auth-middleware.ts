import {all, put, takeLatest} from 'redux-saga/effects';
import { AuthActionTypes } from '@store/auth/auth-actions';
import {removeFromCookie, saveToCookie} from "@utils/helpers/cookie";
import {AlertActionType} from "@store/alert/alert-action";

function* clientLoginWatcher() {
  try {
    saveToCookie('token', 'true')
    // yield put({
    //   type: AlertActionType.SHOW_ALERT,
    //   data: {
    //     text: 'Welcome To EARTHLY HERBS!',
    //     severity: 'success',
    //   }
    // })
  } catch (error: any) {
  }
}

function* clientLogoutWatcher() {
  try {
    removeFromCookie('token')
    yield put({
      type: AlertActionType.SHOW_ALERT,
      data: {
        text: 'So Sad To See You Leave!',
        severity: 'danger',
      }
    })
  } catch (error: any) {
  }
}

function* authMiddleware() {
  yield all([
    takeLatest(AuthActionTypes.CLIENT_LOGIN, clientLoginWatcher),
    takeLatest(AuthActionTypes.CLIENT_LOGOUT, clientLogoutWatcher),
  ]);
}

export default authMiddleware;
