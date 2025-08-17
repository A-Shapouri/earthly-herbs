const preType = 'PRODUCTS_';

export const ProductsActionTypes = {
  GET_PRODUCTS_LIST: `${preType}GET_PRODUCTS_LIST`,
  SET_PRODUCTS_LIST: `${preType}SET_PRODUCTS_LIST`,
  ADD_FILTER_TAG: `${preType}ADD_FILTER_TAG`,
  REMOVE_FILTER_TAG: `${preType}REMOVE_FILTER_TAG`,
  SET_FILTER_CATEGORY: `${preType}SET_FILTER_CATEGORY`,
  SET_CAFFEINE_LEVEL: `${preType}SET_CAFFEINE_LEVEL`,
  SET_SORT_BY: `${preType}SET_SORT_BY`,
  SET_PRICE_RANGE: `${preType}SET_PRICE_RANGE`,
  CLEAR_FILTER_PRODUCTS: `${preType}CLEAR_FILTER_PRODUCTS`,
  GET_PRODUCT_DETAILS: `${preType}GET_PRODUCT_DETAILS`,
  SET_PRODUCT_DETAILS: `${preType}SET_PRODUCT_DETAILS`,
  GET_SURVEY_PRODUCTS: `${preType}GET_SURVEY_PRODUCTS`,
  GET_CATEGORIES_LIST: `${preType}GET_CATEGORIES_LIST`,
  SET_CATEGORIES_LIST: `${preType}SET_CATEGORIES_LIST`,
};

const getProductsList = () => ({ type: ProductsActionTypes.GET_PRODUCTS_LIST });
const addFilterTag = (payload: { tag: string }) => ({ type: ProductsActionTypes.ADD_FILTER_TAG, payload: payload });
const removeFilterTag = (payload: { tag: string }) => ({ type: ProductsActionTypes.REMOVE_FILTER_TAG, payload: payload });
const setFilterCategory = (payload: { category: string }) => ({ type: ProductsActionTypes.SET_FILTER_CATEGORY, payload: payload });
const setCaffeineLevel = (payload: { level: number }) => ({ type: ProductsActionTypes.SET_CAFFEINE_LEVEL, payload: payload });
const setSortBy = (payload: { sort: 'PLH | PHL' | 'PD' | 'PCL' }) => ({ type: ProductsActionTypes.SET_SORT_BY, payload: payload });
const setPriceRange = (payload: { min: number, max: number }) => ({ type: ProductsActionTypes.SET_PRICE_RANGE, payload: payload });
const clearFilterProducts = () => ({ type: ProductsActionTypes.CLEAR_FILTER_PRODUCTS });
const getProductDetails = (payload: { productId: string }) => ({ type: ProductsActionTypes.GET_PRODUCT_DETAILS, payload: payload });
const getSurveyProducts = () => ({ type: ProductsActionTypes.GET_SURVEY_PRODUCTS });
const getCategoriesList = () => ({ type: ProductsActionTypes.GET_CATEGORIES_LIST });

export const ProductsActions = {
  getProductsList: getProductsList,
  addFilterTag: addFilterTag,
  removeFilterTag: removeFilterTag,
  setFilterCategory: setFilterCategory,
  setCaffeineLevel: setCaffeineLevel,
  setSortBy: setSortBy,
  setPriceRange: setPriceRange,
  clearFilterProducts: clearFilterProducts,
  getProductDetails: getProductDetails,
  getSurveyProducts: getSurveyProducts,
  getCategoriesList: getCategoriesList,
};
