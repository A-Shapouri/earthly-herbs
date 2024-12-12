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
}

export interface CartProps {
  name: string
  amount: number
  price: string
  id: number
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