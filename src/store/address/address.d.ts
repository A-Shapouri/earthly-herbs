export interface AddressReducerProps {
  addresses: Array<AddressProps>
  shippingAddress: AddressProps | null
  addressModal: boolean
  billingAddress: AddressProps | null
  editAddress: AddressProps
  editAddressError: AddressErrorProps
  newAddress: AddressProps
  newAddressError: AddressErrorProps
  newAddressIsValid: boolean
  billingSameAsShipping: boolean
  addressListModal: boolean
  addressModalType: 'Shipping' | 'Billing'
  addNewAddressLoading: boolean
  addressListLoading: boolean
  editAddressId: string
  editAddressModal: boolean
  addressItemLoading: boolean
  editAddressItemLoading: boolean
  deleteAddressLoading: boolean
  deleteAddressId: string
}

export interface AddressProps {
  id: string
  address1: string;
  address2: string;
  city: string;
  company: string;
  countryId: string;
  firstname: string;
  lastname: string;
  postcode: string;
  zoneId: string;
}

export interface AddressErrorProps {
  firstname: boolean
  lastname: boolean
  address1: boolean
  countryId: boolean
  city: boolean
  zoneId: boolean
  postcode: boolean
}
