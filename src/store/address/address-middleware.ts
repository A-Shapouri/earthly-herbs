import { all, takeLatest, select, put } from 'redux-saga/effects';
import { AddressActionTypes } from './address-actions';
import { addressStore } from './address-store';
import { AlertActionType } from '@store/alert/alert-action';
function* validateNewAddressWatcher() {
  const { newAddress } = yield select(addressStore);
  const addressError = {
    firstName: false,
    lastName: false,
    address: false,
    province: false,
    country: false,
    city: false,
    postalCode: false,
  };

  yield Object.keys(addressError).map((item) => {
    !newAddress[item].length ? addressError[item] = true : addressError[item] = false;
  });
  const hasError = yield Object.values(addressError).reduce((item) => item);

  if (hasError) {
    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: 'Please fill the requiered fields!',
      severity: 'danger',
    });
    yield put({ type: AddressActionTypes.SET_NEW_ADDRESS_ERROR, data: { errorObject: addressError } });
  } else {
    yield put({ type: AddressActionTypes.ADD_NEW_ADDRESS });
  }
}

function* addressMiddleware() {
  yield all([
    takeLatest(AddressActionTypes.VALIDATE_NEW_ADDRESS, validateNewAddressWatcher),
  ]);
}

export default addressMiddleware;
