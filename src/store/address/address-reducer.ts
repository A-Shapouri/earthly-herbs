import { AddressActionTypes } from './address-actions';
import { AddressReducerProps } from './address';

export const initialState: AddressReducerProps = {
  addresses: [],
  shippingAddress: null,
  billingAddress: null,
  addressModal: false,
  newAddress: {
    id: '',
    firstname: '',
    lastname: '',
    address1: '',
    address2: '',
    countryId: '',
    city: '',
    company: '',
    postcode: '',
    zoneId: '',
  },
  newAddressError: {
    firstname: false,
    lastname: false,
    address1: false,
    countryId: false,
    city: false,
    postcode: false,
    zoneId: false,
  },
  editAddress: {
    id: '',
    firstname: '',
    lastname: '',
    address1: '',
    address2: '',
    countryId: '',
    city: '',
    company: '',
    postcode: '',
    zoneId: '',
  },
  editAddressError: {
    firstname: false,
    lastname: false,
    address1: false,
    countryId: false,
    city: false,
    postcode: false,
    zoneId: false,
  },
  newAddressIsValid: true,
  billingSameAsShipping: false,
  addressListModal: false,
  addressModalType: 'Shipping',
  addNewAddressLoading: false,
  addressListLoading: false,
  editAddressId: '',
  editAddressModal: false,
  addressItemLoading: false,
  editAddressItemLoading: false,
  deleteAddressLoading: false,
  deleteAddressId: '',
};

function addressReducer(state = initialState, action: any) {
  switch (action.type) {
    case AddressActionTypes.ADD_NEW_ADDRESS: {
      return {
        ...state,
        addNewAddressLoading: true,
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
          [action.data.id]: !action.data.value,
        },
      };
    }
    case AddressActionTypes.SET_EDIT_ADDRESS: {
      return {
        ...state,
        editAddressItemLoading: false,
        editAddress: action.data,
      };
    }
    case AddressActionTypes.SET_EDIT_ADDRESS_VALUES: {
      return {
        ...state,
        editAddress: {
          ...state.editAddress,
          [action.data.id]: action.data.value,
        },
        editAddressError: {
          ...state.editAddressError,
          [action.data.id]: !action.data.value,
        },
      };
    }
    case AddressActionTypes.SET_EDIT_ADDRESS_ERROR: {
      return {
        ...state,
        editAddressError: action.data.errorObject,
      };
    }
    case AddressActionTypes.SET_NEW_ADDRESS_ERROR:
      return {
        ...state,
        newAddressIsValid: false,
        newAddressError: action.data.errorObject,
      };
    case AddressActionTypes.SET_ADDRESS_LIST_MODAL:
      return {
        ...state,
        addressListModal: action.data.open,
        addressModalType: action.data.addressModalType,
      };
    case AddressActionTypes.SET_BILLING_AS_SHIPPING:
      return {
        ...state,
        billingAddress: state.billingSameAsShipping ? state.addresses[0] : state.shippingAddress,
        billingSameAsShipping: !state.billingSameAsShipping,
      };
    case AddressActionTypes.GET_ADDRESSES:
      return {
        ...state,
        addNewAddressLoading: false,
        editAddressItemLoading: false,
        deleteAddressLoading: false,
        addressListLoading: true,
      };
    case AddressActionTypes.SET_ADDRESSES:
      return {
        ...state,
        addresses: action.data,
        addressListLoading: false,
      };
    case AddressActionTypes.SET_EDIT_ADDRESS_ID: {
      return {
        ...state,
        editAddressItemLoading: true,
        editAddressId: action.data?.id,
      };
    }
    case AddressActionTypes.SET_EDIT_ADDRESS_MODAL: {
      return {
        ...state,
        editAddressModal: action.data.open,
      };
    }
    case AddressActionTypes.SET_DELETE_ADDRESS_ID: {
      return {
        ...state,
        deleteAddressLoading: true,
        deleteAddressId: action.data?.id,
      };
    }
    case AddressActionTypes.SET_DELETE_ADDRESS_LOADING: {
      return {
        ...state,
        deleteAddressLoading: false,
        deleteAddressId: false,
      };
    }
    default:
      return state;
  }
}

export default addressReducer;
