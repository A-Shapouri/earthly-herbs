export interface ShopReducerProps {
  cart: Array<CartProps>
  totalPrice: string
  currency: 'CAD' | 'USD'
  couponModal: boolean
  couponValue: string
  isCouponValid: boolean
  shippingOptionListModal: boolean
  addToCartLoading: boolean
  updateCartItem: any
  newCartItem: any
  deleteCartItemId: string | null
  deleteCartItemLoading: boolean
  shippingCouriersListLoading: boolean
  shippingCouriersList: Array<ShippingCouriersListProps>
  shippingOption: ShippingOptionProps | null
  order: {
    customerId: string;
    customerAddressId: string;
    total: number;
    products: Array<{
      productId: string;
      quantity: string;
    }>;
    shipments: {
      id: string;
      carrier: string;
    };
  }
  orderLoading: boolean
}

export interface CartProps {
  name?: string
  quantity: string // API uses string for quantity
  price?: string
  id: string // API cart item ID
  productId: number // Product ID for reference
  [key: string]: any // Allow additional properties
}

export interface VerifyCodeResponse {
  data: {
    token_type: string,
    access_token: string,
  },
  message: string,
  status: string
}

export interface SendVerificationCodeResponse {
  data: {
    user_exist: false,
    validation_code_lifetime: number
  }
}

export interface ShippingOptionProps {
  shippingCourierCode: string,
  shippingCourierName: string,
  id: string,
}
