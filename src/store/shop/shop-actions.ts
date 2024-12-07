const preType = 'SHOP_';

export const ShopActionTypes = {
  ADD_TO_CART: `${preType}ADD_TO_CART`,
  REMOVE_FROM_CART: `${preType}REMOVE_FROM_CART`,
  INCREASE_PRODUCT_AMOUNT: `${preType}INCREASE_PRODUCT_AMOUNT`,
  DECREASE_PRODUCT_AMOUNT: `${preType}DECREASE_PRODUCT_AMOUNT`,
  SET_CURRENCY: `${preType}SET_CURRENCY`,
  SET_COUPON_MODAL: `${preType}SET_COUPON_MODAL`,
};

const addToCart = (data: { name: string, price: string, id: number, image: any }) => ({ type: ShopActionTypes.ADD_TO_CART, data: data });
const increaseProductAmount = (data: { id: number }) => ({ type: ShopActionTypes.INCREASE_PRODUCT_AMOUNT, data: data });
const decreaseProductAmount = (data: { id: number }) => ({ type: ShopActionTypes.DECREASE_PRODUCT_AMOUNT, data: data });
const removeFromCart = (data: { id: number }) => ({ type: ShopActionTypes.REMOVE_FROM_CART, data: data });
const setCurrency = (data: { currency: 'CAD' | 'USD' }) => ({ type: ShopActionTypes.SET_CURRENCY, data: data });
const setCopuonModal = (data: { open: boolean }) => ({ type: ShopActionTypes.SET_COUPON_MODAL, data: data });

export const ShopActions = {
  addToCart: addToCart,
  increaseProductAmount: increaseProductAmount,
  decreaseProductAmount: decreaseProductAmount,
  removeFromCart: removeFromCart,
  setCurrency: setCurrency,
  setCopuonModal: setCopuonModal,
};
