import { AddressActionTypes } from './address-actions';
import { AddressReducerProps } from './address';

export const initialState: AddressReducerProps = {
  addresses: [],
  shippingAddress: null,
  addressModal: false,
};

function addressReducer(state = initialState, action: any) {
  switch (action.type) {
    case AddressActionTypes.ADD_NEW_ADDRESS: {
      const addresses = JSON.parse(JSON.stringify(state.addresses));
      addresses.push(action.data.address);
      return {
        ...state,
        addresses: addresses,
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
    default:
      return state;
  }
}

export default addressReducer;
