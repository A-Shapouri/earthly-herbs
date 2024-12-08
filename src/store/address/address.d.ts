export interface AddressReducerProps {
  addresses: Array<AddressProps>
  shippingAddress: AddressProps | null
  addressModal: boolean
  billingAddress: AddressProps | null
  newAddress: AddressProps
  newAddressError: AddressErrorProps
  newAddressIsValid: boolean
}

export interface AddressProps {
  id: string
  firstName: string
  lastName: string
  address: string
  extra: string
  country: string
  city: string
  province: string
  postalCode: string
  phone: string
}

export interface AddressErrorProps {
  firstName: boolean
  lastName: boolean
  address: boolean
  country: boolean
  city: boolean
  province: boolean
  postalCode: boolean
}
