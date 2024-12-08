import { AddressProps } from './address';

const preType = 'ADDRESS_';

export const AddressActionTypes = {
  ADD_NEW_ADDRESS: `${preType}ADD_NEW_ADDRESS`,
  EDIT_ADDRESS: `${preType}EDIT_ADDRESS`,
  DELETE_ADDRESS: `${preType}DELETE_ADDRESS`,
  SET_SHIPPING_ADDRESS: `${preType}SET_SHIPPING_ADDRESS`,
  SET_ADDRESS_MODAL: `${preType}SET_ADDRESS_MODAL`,
  SET_BILLING_ADDRESS: `${preType}SET_BILLING_ADDRESS`,
  SET_NEW_ADDRESS: `${preType}SET_NEW_ADDRESS`,
  VALIDATE_NEW_ADDRESS: `${preType}VALIDATE_NEW_ADDRESS`,
  SET_NEW_ADDRESS_ERROR: `${preType}SET_NEW_ADDRESS_ERROR`,
};

const addNewAddress = () => ({ type: AddressActionTypes.ADD_NEW_ADDRESS });
const editAddress = (data: { address: AddressProps }) => ({ type: AddressActionTypes.EDIT_ADDRESS, data: data });
const deleteAddress = (data: { id: string }) => ({ type: AddressActionTypes.DELETE_ADDRESS, data: data });
const setShippingAddress = (data: { address: AddressProps }) => ({ type: AddressActionTypes.SET_SHIPPING_ADDRESS, data: data });
const setAddressModal = (data: { open: boolean }) => ({ type: AddressActionTypes.SET_ADDRESS_MODAL, data: data });
const setBillingAddress = (data: { address: AddressProps }) => ({ type: AddressActionTypes.SET_BILLING_ADDRESS, data: data });
const setNewAddress = (data: { id: string, value: string }) => ({ type: AddressActionTypes.SET_NEW_ADDRESS, data: data });
const validateNewAddress = () => ({ type: AddressActionTypes.VALIDATE_NEW_ADDRESS });

export const AddressActions = {
  addNewAddress: addNewAddress,
  editAddress: editAddress,
  deleteAddress: deleteAddress,
  setShippingAddress: setShippingAddress,
  setAddressModal: setAddressModal,
  setBillingAddress: setBillingAddress,
  setNewAddress: setNewAddress,
  validateNewAddress: validateNewAddress,
};
