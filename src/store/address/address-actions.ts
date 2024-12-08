import {AddressProps} from './address'

const preType = 'ADDRESS_';

export const AddressActionTypes = {
  ADD_NEW_ADDRESS: `${preType}ADD_NEW_ADDRESS`,
  EDIT_ADDRESS: `${preType}EDIT_ADDRESS`,
  DELETE_ADDRESS: `${preType}DELETE_ADDRESS`,
  SET_SHIPPING_ADDRESS: `${preType}SET_SHIPPING_ADDRESS`,
  SET_ADDRESS_MODAL: `${preType}SET_ADDRESS_MODAL`,
};

const addNewAddress = (data: { address: AddressProps }) => ({type: AddressActionTypes.ADD_NEW_ADDRESS, data: data});
const editAddress = (data: { address: AddressProps }) => ({type: AddressActionTypes.EDIT_ADDRESS, data: data});
const deleteAddress = (data: { id: string }) => ({type: AddressActionTypes.DELETE_ADDRESS, data: data});
const setShippingAddress = (data: { address: AddressProps }) => ({type: AddressActionTypes.SET_SHIPPING_ADDRESS, data: data});
const setAddressModal = (data: { open: boolean }) => ({type: AddressActionTypes.SET_ADDRESS_MODAL, data: data});

export const AddressActions = {
  addNewAddress: addNewAddress,
  editAddress: editAddress,
  deleteAddress: deleteAddress,
  setShippingAddress: setShippingAddress,
  setAddressModal: setAddressModal,
};
