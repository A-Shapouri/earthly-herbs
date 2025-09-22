import { all, takeLatest, select, put } from 'redux-saga/effects';
import { AddressActionTypes } from './address-actions';
import { addressStore } from './address-store';
import { AlertActionType } from '@store/alert/alert-action';
import createAddressApi from '@api/address/create';
import addressListApi from '@api/address/list';
import addressShowApi from '@api/address/show';
import updateAddressApi from '@api/address/update';
import deleteAddressApi from '@api/address/delete';

function* validateNewAddressWatcher() {
  const { newAddress } = yield select(addressStore);
  const addressError = {
    firstname: false,
    lastname: false,
    address1: false,
    countryId: false,
    city: false,
    zoneId: false,
    postcode: false,
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

function* validateEditAddressWatcher() {
  const { editAddress } = yield select(addressStore);
  const addressError = {
    firstname: false,
    lastname: false,
    address1: false,
    countryId: false,
    city: false,
    zoneId: false,
    postcode: false,
  };

  yield Object.keys(addressError).map((item) => {
    !editAddress[item].length ? addressError[item] = true : addressError[item] = false;
  });
  const hasError = yield Object.values(addressError).reduce((item) => item);

  if (hasError) {
    yield put({
      type: AlertActionType.SHOW_ALERT,
      text: 'Please fill the requiered fields!',
      severity: 'danger',
    });
    yield put({ type: AddressActionTypes.SET_EDIT_ADDRESS_ERROR, data: { errorObject: addressError } });
  } else {
    yield put({ type: AddressActionTypes.EDIT_ADDRESS });
  }
}

function* addNewAddressWatcher() {
  const { newAddress } = yield select(addressStore);
  try {
    yield createAddressApi({
      customerId: newAddress.customerId,
      address1: newAddress.address1,
      address2: newAddress.address2,
      city: newAddress.city,
      company: newAddress.company,
      countryId: newAddress.countryId,
      firstname: newAddress.firstname,
      lastname: newAddress.lastname,
      postcode: newAddress.postcode,
      zoneId: newAddress.zoneId,
    });
    yield put({ type: AddressActionTypes.GET_ADDRESSES });
    yield put({ type: AddressActionTypes.SET_ADDRESS_MODAL, data: { open: false } });
    yield put({
      type: AlertActionType.SHOW_ALERT,
      data: {
        text: 'Address created successfully',
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

function* getAddressesWatcher() {
  try {
    const response = yield addressListApi({
      page: 0,
      sort: 'id,desc',
      perPage: 20,
    });
    yield put({
      type: AddressActionTypes.SET_ADDRESSES,
      data: response.data,
    });
    if(response.data.length > 0) {
      yield put({
        type: AddressActionTypes.SET_SHIPPING_ADDRESS,
        data: {address: response.data[0]},
        });
      yield put({
        type: AddressActionTypes.SET_BILLING_ADDRESS,
        data: {address: response.data[0]},
      });
    }
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

function* getAddressByIdWatcher() {
  const { editAddressId } = yield select(addressStore);
  try {
    const response = yield addressShowApi({
      id: editAddressId,
    });
    yield put({
      type: AddressActionTypes.SET_EDIT_ADDRESS,
      data: response,
    });
    yield put({
      type: AddressActionTypes.SET_EDIT_ADDRESS_MODAL,
      data: { open: true },
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

function* editAddressWatcher() {
  const { editAddress } = yield select(addressStore);
  try {
    yield updateAddressApi({
      id: editAddress.id,
      payload: {
        customerId: editAddress.customerId,
        id: editAddress.id,
        address1: editAddress.address1,
        address2: editAddress.address2,
        city: editAddress.city,
        company: editAddress.company,
        countryId: editAddress.countryId,
        firstname: editAddress.firstname,
        lastname: editAddress.lastname,
        postcode: editAddress.postcode,
        zoneId: editAddress.zoneId,
      },
    });
    yield put({ type: AddressActionTypes.GET_ADDRESSES });
    yield put({ type: AddressActionTypes.SET_EDIT_ADDRESS_MODAL, data: { open: false } });
    yield put({
      type: AlertActionType.SHOW_ALERT,
      data: {
        text: 'Address updated successfully',
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

function* deleteAddressWatcher() {
  const { deleteAddressId } = yield select(addressStore);
  try {
    yield deleteAddressApi({
      id: deleteAddressId,
    });
    yield put({ type: AddressActionTypes.GET_ADDRESSES });
    yield put({ type: AddressActionTypes.SET_DELETE_ADDRESS_LOADING });
    yield put({
      type: AlertActionType.SHOW_ALERT,
      data: {
        text: 'Address deleted successfully',
        severity: 'success',
      },
    });
  } catch (error: any) {
    yield put({ type: AddressActionTypes.SET_DELETE_ADDRESS_LOADING });
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

function* addressMiddleware() {
  yield all([
    takeLatest(AddressActionTypes.VALIDATE_NEW_ADDRESS, validateNewAddressWatcher),
    takeLatest(AddressActionTypes.ADD_NEW_ADDRESS, addNewAddressWatcher),
    takeLatest(AddressActionTypes.GET_ADDRESSES, getAddressesWatcher),
    takeLatest(AddressActionTypes.VALIDATE_EDIT_ADDRESS, validateEditAddressWatcher),
    takeLatest(AddressActionTypes.SET_EDIT_ADDRESS_ID, getAddressByIdWatcher),
    takeLatest(AddressActionTypes.EDIT_ADDRESS, editAddressWatcher),
    takeLatest(AddressActionTypes.SET_DELETE_ADDRESS_ID, deleteAddressWatcher),
  ]);
}

export default addressMiddleware;
