import { all, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { ShopActionTypes } from './shop-actions';
import getCartsListApi from '@api/cart/list';
import createCartApi from '@api/cart/create';
import updateCartApi from '@api/cart/update';
import deleteCartApi from '@api/cart/delete';
import { shopStore } from './shop-store';

function* getCartsListWatcher() {
  try {
    const response = yield getCartsListApi({
      page: 0,
      sort: 'id',
      perPage: 100,
    });

    yield put({
      type: ShopActionTypes.SET_CART,
      payload: {
        data: response?.data || [],
      },
    });
  } catch (error: any) {
  }
}

function* addToCartWatcher() {
  const { newCartItem } = yield select(shopStore);

  try {
    yield createCartApi({
      productId: newCartItem?.productId,
      quantity: newCartItem?.quantity,
    });
    yield put({
      type: ShopActionTypes.GET_CART,
    });
    yield put({
      type: ShopActionTypes.ADD_TO_CART_SUCCESS,
    });
  } catch (error: any) {
    yield put({
      type: ShopActionTypes.ADD_TO_CART_FAILURE,
      payload: {
        error: error.message,
      },
    });
  }
}

function* updateCartItemWatcher() {
  const { updateCartItem } = yield select(shopStore);
  try {
    yield updateCartApi({
      id: updateCartItem?.id,
      payload: updateCartItem,
    });

    yield put({
      type: ShopActionTypes.GET_CART,
    });

    yield put({
      type: ShopActionTypes.UPDATE_CART_ITEM_SUCCESS,
      payload: {
        cartId: updateCartItem?.id,
        quantity: updateCartItem?.quantity,
      },
    });
  } catch (error: any) {
    yield put({
      type: ShopActionTypes.UPDATE_CART_ITEM_FAILURE,
      payload: {
        error: error.message,
      },
    });
  }
}

function* deleteCartItemWatcher() {
  try {
    const { deleteCartItemId } = yield select(shopStore);
    yield deleteCartApi({ id: deleteCartItemId });

    yield put({
      type: ShopActionTypes.GET_CART,
    });
  } catch (error: any) {
    yield put({
      type: ShopActionTypes.DELETE_CART_ITEM_FAILURE,
      payload: {
        error: error.message,
      },
    });
  }
}

function* shopMiddleware() {
  yield all([
    yield takeEvery(ShopActionTypes.GET_CART, getCartsListWatcher),
    yield takeEvery(ShopActionTypes.ADD_TO_CART, addToCartWatcher),
    yield takeLatest(ShopActionTypes.UPDATE_CART_ITEM, updateCartItemWatcher),
    yield takeEvery(ShopActionTypes.DELETE_CART_ITEM, deleteCartItemWatcher),
  ]);
}

export default shopMiddleware;
