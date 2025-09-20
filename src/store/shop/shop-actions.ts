import { ShippingOptionProps } from '@store/shop/shop';

const preType = 'SHOP_';

export const ShopActionTypes = {
  ADD_TO_CART: `${preType}ADD_TO_CART`,
  SET_CART: `${preType}SET_CART`,
  GET_CART: `${preType}GET_CART`,
  REMOVE_FROM_CART: `${preType}REMOVE_FROM_CART`,
  INCREASE_PRODUCT_AMOUNT: `${preType}INCREASE_PRODUCT_AMOUNT`,
  DECREASE_PRODUCT_AMOUNT: `${preType}DECREASE_PRODUCT_AMOUNT`,
  SET_CURRENCY: `${preType}SET_CURRENCY`,
  SET_COUPON_MODAL: `${preType}SET_COUPON_MODAL`,
  SET_COUPON_VALUE: `${preType}SET_COUPON_VALUE`,
  VALIDATE_COUPON_CODE: `${preType}VALIDATE_COUPON_CODE`,
  SET_SHIPPING_OPTION_LIST_MODAL: `${preType}SET_SHIPPING_OPTION_LIST_MODAL`,
  SET_SHIPPING_OPTION: `${preType}SET_SHIPPING_OPTION`,
};

const addToCart = (data: { name: string, price: string, id: any, image: any }) => ({ type: ShopActionTypes.ADD_TO_CART, data: data });
const getCart = () => ({ type: ShopActionTypes.GET_CART });
const increaseProductAmount = (data: { id: number }) => ({ type: ShopActionTypes.INCREASE_PRODUCT_AMOUNT, data: data });
const decreaseProductAmount = (data: { id: number }) => ({ type: ShopActionTypes.DECREASE_PRODUCT_AMOUNT, data: data });
const removeFromCart = (data: { id: number }) => ({ type: ShopActionTypes.REMOVE_FROM_CART, data: data });
const setCurrency = (data: { currency: 'CAD' | 'USD' }) => ({ type: ShopActionTypes.SET_CURRENCY, data: data });
const setCouponModal = (data: { open: boolean }) => ({ type: ShopActionTypes.SET_COUPON_MODAL, data: data });
const setCouponValue = (data: { value: string }) => ({ type: ShopActionTypes.SET_COUPON_VALUE, data: data });
const validateCouponCode = () => ({ type: ShopActionTypes.VALIDATE_COUPON_CODE });
const setShippingOptionListModal = (data: { open: boolean }) => ({ type: ShopActionTypes.SET_SHIPPING_OPTION_LIST_MODAL, data: data });
const setShippingOption = (data: { option: ShippingOptionProps }) => ({ type: ShopActionTypes.SET_SHIPPING_OPTION, data: data });

export const ShopActions = {
  addToCart: addToCart,
  getCart: getCart,
  increaseProductAmount: increaseProductAmount,
  decreaseProductAmount: decreaseProductAmount,
  removeFromCart: removeFromCart,
  setCurrency: setCurrency,
  setCouponModal: setCouponModal,
  setCouponValue: setCouponValue,
  validateCouponCode: validateCouponCode,
  setShippingOptionListModal: setShippingOptionListModal,
  setShippingOption: setShippingOption,
};
