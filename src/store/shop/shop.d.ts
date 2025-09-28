export interface ShopReducerProps {
  cart: Array<CartProps>
  totalPrice: string
  currency: 'CAD' | 'USD'
  couponModal: boolean
  couponValue: string
  isCouponValid: boolean
  shippingOption: ShippingOptionProps | null
  shippingOptionList: Array<ShippingOptionProps>
  shippingOptionListModal: boolean
  addToCartLoading: boolean
  updateCartItem: any
  newCartItem: any
  deleteCartItemId: string | null
  deleteCartItemLoading: boolean
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
  title: string,
  description: string,
  id: string,
}
