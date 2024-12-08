import { AddressActionTypes } from './address-actions';
import { AddressReducerProps } from './address';

export const initialState: AddressReducerProps = {
  addresses: [],
  shippingAddress: null,
  billingAddress: null,
  addressModal: false,
  newAddress: {
    id: '',
    firstName: '',
    lastName: '',
    address: '',
    extra: '',
    country: '',
    city: '',
    province: '',
    postalCode: '',
    phone: '',
  },
  newAddressError: {
    firstName: false,
    lastName: false,
    address: false,
    country: false,
    city: false,
    province: false,
    postalCode: false,
  },
  newAddressIsValid: true,
};

function addressReducer(state = initialState, action: any) {
  switch (action.type) {
    case AddressActionTypes.ADD_NEW_ADDRESS: {
      const addresses = JSON.parse(JSON.stringify(state.addresses));
      state.newAddress.id = (Math.random() * 100).toString();
      addresses.push(state.newAddress);
      return {
        ...state,
        addresses: addresses,
        newAddress: initialState.newAddress,
        addressModal: false,
      };
    }
    case AddressActionTypes.EDIT_ADDRESS: {
      return {
        ...state,
      };
    }
    case AddressActionTypes.SET_SHIPPING_ADDRESS: {
      return {
        ...state,
        shippingAddress: action.data.address,
      };
    }
    case AddressActionTypes.SET_ADDRESS_MODAL: {
      return {
        ...state,
        addressModal: action.data.open,
      };
    }
    case AddressActionTypes.SET_BILLING_ADDRESS: {
      return {
        ...state,
        billingAddress: action.data.address,
      };
    }
    case AddressActionTypes.SET_NEW_ADDRESS: {
      return {
        ...state,
        newAddress: {
          ...state.newAddress,
          [action.data.id]: action.data.value,
        },
        newAddressError: {
          ...state.newAddressError,
          [action.data.id]: !action.data.value
        }
      };
    }
    case AddressActionTypes.SET_NEW_ADDRESS_ERROR:
      return {
        ...state,
        newAddressIsValid: false,
        newAddressError: action.data.errorObject
      }
    default:
      return state;
  }
}

export default addressReducer;
