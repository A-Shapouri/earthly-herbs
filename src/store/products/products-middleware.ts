import { all, put, takeEvery, select, debounce } from 'redux-saga/effects';
import { ProductsActionTypes } from './products-actions';
import {
  productsData,
} from '../temp/products-data';
import { productsStore } from './products-store';
import productsListApi from '@api/products/list';
import categoiresListApi from '@api/categories/list';
import productDetailsApi from '@api/products/show';

function* getProductsListWatcher() {
  try {
    const response = yield productsListApi({
      page: 0,
      sort: 'id',
      perPage: 10,
    });

    yield put({
      type: ProductsActionTypes.SET_PRODUCTS_LIST,
      payload: {
        data: response,
      },
    });
  } catch (error: any) {
  }
}

function* getProductDetailsWatcher() {
  try {
    const { productItemId } = yield select(productsStore);
    const productItem = productDetailsApi({
      id: productItemId,
    });
    yield put({
      type: ProductsActionTypes.SET_PRODUCT_DETAILS,
      payload: {
        productItem: productItem,
      },
    });
  } catch (error: any) {
  }
}

function* getCategoriesListWatcher() {
  try {
    const response = yield categoiresListApi({});

    yield put({
      type: ProductsActionTypes.SET_CATEGORIES_LIST,
      payload: response,
    });
  } catch (error: any) {
  }
}

function* watchRapidAction() {
  yield debounce(700, ProductsActionTypes.SET_PRICE_RANGE, getProductsListWatcher);
}

function* productsMiddleware() {
  yield all([
    yield takeEvery(ProductsActionTypes.GET_PRODUCTS_LIST, getProductsListWatcher),
    yield takeEvery(ProductsActionTypes.ADD_FILTER_TAG, getProductsListWatcher),
    yield takeEvery(ProductsActionTypes.REMOVE_FILTER_TAG, getProductsListWatcher),
    yield takeEvery(ProductsActionTypes.SET_FILTER_CATEGORY, getProductsListWatcher),
    yield takeEvery(ProductsActionTypes.SET_CAFFEINE_LEVEL, getProductsListWatcher),
    yield takeEvery(ProductsActionTypes.SET_SORT_BY, getProductsListWatcher),
    yield takeEvery(ProductsActionTypes.CLEAR_FILTER_PRODUCTS, getProductsListWatcher),
    yield takeEvery(ProductsActionTypes.GET_PRODUCT_DETAILS, getProductDetailsWatcher),
    yield takeEvery(ProductsActionTypes.GET_CATEGORIES_LIST, getCategoriesListWatcher),
    yield watchRapidAction(),
  ]);
}

export default productsMiddleware;
