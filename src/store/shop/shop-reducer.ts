import { ShopActionTypes } from './shop-actions';
import { ShopReducerProps } from './shop';

export const initialState: ShopReducerProps = {
  cart: [],
  totalPrice: '0',
  currency: 'USD',
  couponModal: false,
  couponValue: '',
  isCouponValid: false,
  addToCartLoading: false,
  shippingOption: null,
  shippingCouriersList: [],
  shippingCouriersListLoading: false,
  shippingOptionListModal: false,
  updateCartItem: null,
  newCartItem: null,
  deleteCartItemId: null,
  deleteCartItemLoading: false,
  order: {
    customerId: '',
    customerAddressId: '',
    total: 0,
    products: [],
    shipments: {
      id: '',
      carrier: '',
    },
  },
  orderLoading: false,
};

function shopReducer(state = initialState, action: any) {
  switch (action.type) {
    case ShopActionTypes.ADD_TO_CART: {
      return {
        ...state,
        newCartItem: action.data,
        addToCartLoading: true,
      };
    }
    case ShopActionTypes.ADD_TO_CART_SUCCESS: {
      return {
        ...state,
        addToCartLoading: false,
      };
    }
    case ShopActionTypes.ADD_TO_CART_FAILURE: {
      return {
        ...state,
        addToCartLoading: false,
      };
    }
    case ShopActionTypes.UPDATE_CART_ITEM: {
      return {
        ...state,
        addToCartLoading: true,
        updateCartItem: action.data,
      };
    }
    case ShopActionTypes.UPDATE_CART_ITEM_SUCCESS: {
      return {
        ...state,
        addToCartLoading: false,
      };
    }
    case ShopActionTypes.UPDATE_CART_ITEM_FAILURE: {
      return {
        ...state,
        addToCartLoading: false,
      };
    }
    case ShopActionTypes.DELETE_CART_ITEM: {
      return {
        ...state,
        deleteCartItemLoading: true,
        deleteCartItemId: action.data.cartId,
      };
    }
    case ShopActionTypes.DELETE_CART_ITEM_SUCCESS: {
      return {
        ...state,
        deleteCartItemLoading: false,
        deleteCartItemId: null,
      };
    }
    case ShopActionTypes.DELETE_CART_ITEM_FAILURE: {
      return {
        ...state,
        deleteCartItemLoading: false,
        deleteCartItemId: null,
      };
    }
    case ShopActionTypes.REMOVE_FROM_CART: {
      const id = action.data.id;
      const cart = JSON.parse(JSON.stringify(state.cart));
      const index = cart.findIndex(item => item.productId.toString() === id.toString());
      if (index !== -1) {
        const productPrice = parseFloat(cart[index].price || '0');
        const productQuantity = parseInt(cart[index].quantity || '0');
        cart.splice(index, 1);
        return {
          ...state,
          cart: cart,
          totalPrice: (parseFloat(state.totalPrice) - (productPrice * productQuantity)).toFixed(2),
        };
      }
      return state;
    }
    case ShopActionTypes.INCREASE_PRODUCT_AMOUNT: {
      const productId = action.data.id;
      const cart = JSON.parse(JSON.stringify(state.cart));
      const product = cart.find(item => item.productId.toString() === productId.toString());
      if (product) {
        product.quantity = (parseInt(product.quantity || '0') + 1).toString();
        return {
          ...state,
          cart: cart,
          totalPrice: (parseFloat(state.totalPrice) + parseFloat(product.price || '0')).toFixed(2),
        };
      }
      return state;
    }

    case ShopActionTypes.DECREASE_PRODUCT_AMOUNT: {
      const productId = action.data.id;
      const cart = JSON.parse(JSON.stringify(state.cart));
      const product = cart.find(item => item.productId.toString() === productId.toString());
      if (product && parseInt(product.quantity || '0') > 0) {
        product.quantity = (parseInt(product.quantity || '0') - 1).toString();
        return {
          ...state,
          cart: cart,
          totalPrice: (parseFloat(state.totalPrice) - parseFloat(product.price || '0')).toFixed(2),
        };
      }
      return state;
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
      };

    case ShopActionTypes.VALIDATE_COUPON_CODE:
      return {
        ...state,
        isCouponValid: true,
        couponModal: false,
      };
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
      };

    case ShopActionTypes.SET_CART: {
      const cartItems = action.payload.data || [];
      const calculatedTotal = cartItems.reduce((total, item) => {
        const itemPrice = parseFloat(item.product?.[0]?.price || '0');
        const itemQuantity = parseInt(item.quantity || '0');
        return total + (itemPrice * itemQuantity);
      }, 0);

      return {
        ...state,
        cart: cartItems,
        totalPrice: calculatedTotal.toFixed(2),
        totalPrice: action.payload.data.reduce((acc: number, item: any) => acc + parseFloat(item?.product?.[0]?.price) * parseFloat(item?.quantity), 0).toFixed(2),
      };
    }
    case ShopActionTypes.SET_SHOP_INITIAL_STATE:
      return initialState;
    case ShopActionTypes.GET_SHIPPING_COURIERS_LIST: {
      return {
        ...state,
        shippingCouriersListLoading: true,
      };
    }
    case ShopActionTypes.SET_SHIPPING_COURIERS_LIST: {
      return {
        ...state,
        shippingCouriersListLoading: false,
        shippingCouriersList: action.payload.data || [],
      };
    }
    case ShopActionTypes.CREATE_ORDER: {
      return {
        ...state,
        orderLoading: true,
        order: action.data,
      };
    }
    case ShopActionTypes.SET_ORDER_LOADING: {
      return {
        ...state,
        orderLoading: action.data.loading,
      };
    }
    default:
      return state;
  }
}

export default shopReducer;
