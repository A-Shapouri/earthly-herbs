import {all, put, takeEvery, select, debounce} from 'redux-saga/effects';
import {ProductsActionTypes} from './products-actions'
import {
  productsData,
  searchProductsByTagsAndOptionalCategory,
  filterProductsByPriceRange,
  filterProductsByCaffeineLevel,
  sortProductsByPrice,
  sortByDiscount
} from '../temp/products-data'
import {productsStore} from './products-store'

function* getProductsListWatcher() {
  try {
    const {selectedTags, priceRange, selectedCategory, caffeineLevel, sortBy} = yield select(productsStore);
    let tempProducts = searchProductsByTagsAndOptionalCategory(productsData, selectedTags, selectedCategory);
    tempProducts = filterProductsByPriceRange(tempProducts, priceRange.min, priceRange.max);
    tempProducts = filterProductsByCaffeineLevel(tempProducts, caffeineLevel);
    if (sortBy) {
      tempProducts = sortBy === 'PLH' || sortBy === 'PHL' ? sortProductsByPrice(tempProducts, sortBy === 'PLH' ? 'asc' : 'desc') : sortByDiscount(tempProducts);
    }

    yield put({
      type: ProductsActionTypes.SET_PRODUCTS_LIST,
      payload: {
        data: tempProducts
      }
    })
  } catch (error: any) {
  }
}

function* getProductDetailsWatcher() {
  try {
    const {productItemId} = yield select(productsStore);
    const productItem = productsData.find((value) => value.id.toString() === productItemId);
    yield put({
      type: ProductsActionTypes.SET_PRODUCT_DETAILS,
      payload: {
        productItem: productItem
      }
    })
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
    yield watchRapidAction(),
  ]);
}

export default productsMiddleware;
