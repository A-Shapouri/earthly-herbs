import { ShopActionTypes } from './shop-actions';
import { ShopReducerProps } from './shop';

export const initialState: ShopReducerProps = {
  cart: [],
  totalPrice: '0',
  currency: 'USD',
  couponModal: false,
  couponValue: '',
  isCouponValid: false,
  shippingOption: {title: 'Expedited Parcel', description: 'Est delivery: November 22, 2024 – November 23, 2024', id: '1'},
  shippingOptionList: [
    {title: 'Expedited Parcel', description: 'Est delivery: November 22, 2024 – November 23, 2024', id: '1'},
    {title: 'Expedited Parcel', description: 'Est delivery: November 24, 2024 – November 25, 2024', id: '2'},
    {title: 'Expedited Parcel', description: 'Est delivery: November 26, 2024 – November 27, 2024', id: '3'},
    {title: 'Expedited Parcel', description: 'Est delivery: November 28, 2024 – November 29, 2024', id: '4'},
    {title: 'Expedited Parcel', description: 'Est delivery: November 30, 2024 – December 01, 2024', id: '5'},
  ],
  shippingOptionListModal: false,
};

function shopReducer(state = initialState, action: any) {
  switch (action.type) {
    case ShopActionTypes.ADD_TO_CART: {
      const item = action.data;
      item.amount = 1;
      const cart = JSON.parse(JSON.stringify(state.cart));
      cart.push(item);
      return {
        ...state,
        cart: cart,
        totalPrice: (parseFloat(state.totalPrice) + parseFloat(item.price)).toFixed(2),
      };
    }
    case ShopActionTypes.REMOVE_FROM_CART: {
      const id = action.data.id;
      const cart = JSON.parse(JSON.stringify(state.cart));
      const index = cart.findIndex(item => item.id.toString() === id.toString());
      const productPrice = cart[index].price;
      cart.splice(index, 1);
      return {
        ...state,
        cart: cart,
        totalPrice: (parseFloat(state.totalPrice) - parseFloat(productPrice)).toFixed(2),

      };
    }
    case ShopActionTypes.INCREASE_PRODUCT_AMOUNT: {
      const productId = action.data.id;
      const cart = JSON.parse(JSON.stringify(state.cart));
      const product = cart.find(item => item.id.toString() === productId.toString());
      product.amount = product.amount + 1;
      return {
        ...state,
        cart: cart,
        totalPrice: (parseFloat(state.totalPrice) + parseFloat(product.price)).toFixed(2),

      };
    }

    case ShopActionTypes.DECREASE_PRODUCT_AMOUNT: {
      const productId = action.data.id;
      const cart = JSON.parse(JSON.stringify(state.cart));
      const product = cart.find(item => item.id.toString() === productId.toString());
      product.amount = product.amount - 1;
      return {
        ...state,
        cart: cart,
        totalPrice: (parseFloat(state.totalPrice) - parseFloat(product.price)).toFixed(2),
      };
    }

    case ShopActionTypes.SET_CURRENCY: {
      return {
        ...state,
        currency: action.data.currency,
      };
    }

    case ShopActionTypes.SET_COUPON_MODAL:
      return {
        ...state,
        couponModal: action.data.open,
      };

    case ShopActionTypes.SET_COUPON_VALUE:
      return {
        ...state,
        couponValue: action.data.value,
      }

    case ShopActionTypes.VALIDATE_COUPON_CODE:
      return {
        ...state,
        isCouponValid: true,
        couponModal: false,
      }
    case ShopActionTypes.SET_SHIPPING_OPTION: {
      return {
        ...state,
        shippingOption: action.data.option,
        shippingOptionListModal: false,
      };
    }
    case ShopActionTypes.SET_SHIPPING_OPTION_LIST_MODAL:
      return {
        ...state,
        shippingOptionListModal: action.data.open,
      }

    default:
      return state;
  }
}

export default shopReducer;
