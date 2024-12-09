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
  billingSameAsShipping: false,
  addressListModal: false,
};

function addressReducer(state = initialState, action: any) {
  switch (action.type) {
    case AddressActionTypes.ADD_NEW_ADDRESS: {
      const addresses = JSON.parse(JSON.stringify(state.addresses));
      const newId = (Math.random() * 100).toString();
      if(!addresses.length) {

      }
      addresses.push({
        ...state.newAddress,
        id: newId,
      });
      return {
        ...state,
        addresses: addresses,
        newAddress: initialState.newAddress,
        newAddressIsValid: true,
        addressModal: false,
        shippingAddress: addresses.length === 1 ? addresses[0] : state.shippingAddress,
        billingAddress: addresses.length === 1 ? addresses[0] : state.billingAddress,
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
        addressListModal: false,
      };
    }
    case AddressActionTypes.SET_ADDRESS_MODAL: {
      return {
        ...state,
        addressModal: action.data.open,
        newAddress: initialState.newAddress,
        newAddressIsValid: initialState.newAddressIsValid,
      };
    }
    case AddressActionTypes.SET_BILLING_ADDRESS: {
      return {
        ...state,
        billingAddress: action.data.address,
        addressListModal: false,
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
    case AddressActionTypes.SET_ADDRESS_LIST_MODAL:
      return {
        ...state,
        addressListModal: action.data.open,
      }
    case AddressActionTypes.SET_BILLING_AS_SHIPPING:
      return {
        ...state,
        billingAddress: state.billingSameAsShipping ? state.addresses[0] : state.shippingAddress,
        billingSameAsShipping: !state.billingSameAsShipping
      }
    default:
      return state;
  }
}

export default addressReducer;
