import { all, put, takeEvery } from 'redux-saga/effects';
import { ShopActionTypes } from './shop-actions';
import getCartsListApi from '@api/cart/list';

function* getCartsListWatcher() {
  try {
    const response = yield getCartsListApi({
      page: 0,
      sort: 'id',
      perPage: 100,
    });
    console.log('middleware', response.data);
    if (response?.data?.length > 0) {
      yield put({
        type: ShopActionTypes.SET_CART,
        payload: {
          data: response.data,
        },
      });
    }
  } catch (error: any) {
  }
}

function* shopMiddleware() {
  yield all([
    yield takeEvery(ShopActionTypes.GET_CART, getCartsListWatcher),
  ]);
}

export default shopMiddleware;
