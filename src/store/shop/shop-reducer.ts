import { ShopActionTypes } from './shop-actions';
import { ShopReducerProps } from './shop';

export const initialState: ShopReducerProps = {
  cart: [],
  totalPrice: '0',
  currency: 'USD',
  couponModal: false,
  couponValue: '',
  isCouponValid: false
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
      const index = cart.findIndex(item => item.id === id);
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
      const product = cart.find(item => item.id === productId);
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
      const product = cart.find(item => item.id === productId);
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

    default:
      return state;
  }
}

export default shopReducer;
