export interface AddressReducerProps {
  addresses: Array<AddressProps>
  shippingAddress: AddressProps | null
  addressModal: boolean
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
