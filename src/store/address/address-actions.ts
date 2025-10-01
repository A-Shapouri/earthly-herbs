import { AddressErrorProps, AddressProps } from './address';

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
  SET_ADDRESS_LIST_MODAL: `${preType}SET_ADDRESS_LIST_MODAL`,
  SET_BILLING_AS_SHIPPING: `${preType}SET_BILLING_AS_SHIPPING`,
  GET_ADDRESSES: `${preType}GET_ADDRESSES`,
  SET_ADDRESSES: `${preType}SET_ADDRESSES`,
  SET_EDIT_ADDRESS: `${preType}SET_EDIT_ADDRESS`,
  SET_EDIT_ADDRESS_ERROR: `${preType}SET_EDIT_ADDRESS_ERROR`,
  VALIDATE_EDIT_ADDRESS: `${preType}VALIDATE_EDIT_ADDRESS`,
  SET_EDIT_ADDRESS_ID: `${preType}SET_EDIT_ADDRESS_ID`,
  SET_EDIT_ADDRESS_MODAL: `${preType}SET_EDIT_ADDRESS_MODAL`,
  SET_EDIT_ADDRESS_VALUES: `${preType}SET_EDIT_ADDRESS_VALUES`,
  SET_DELETE_ADDRESS_ID: `${preType}SET_DELETE_ADDRESS_ID`,
  SET_DELETE_ADDRESS_LOADING: `${preType}SET_DELETE_ADDRESS_LOADING`,
  SET_ADDRESS_INITIAL_STATE: `${preType}SET_ADDRESS_INITIAL_STATE`,
};

const addNewAddress = () => ({ type: AddressActionTypes.ADD_NEW_ADDRESS });
const editAddress = (data: { address: AddressProps }) => ({ type: AddressActionTypes.EDIT_ADDRESS, data: data });
const deleteAddress = (data: { id: string }) => ({ type: AddressActionTypes.DELETE_ADDRESS, data: data });
const setShippingAddress = (data: { address: AddressProps }) => ({ type: AddressActionTypes.SET_SHIPPING_ADDRESS, data: data });
const setAddressModal = (data: { open: boolean }) => ({ type: AddressActionTypes.SET_ADDRESS_MODAL, data: data });
const setBillingAddress = (data: { address: AddressProps }) => ({ type: AddressActionTypes.SET_BILLING_ADDRESS, data: data });
const setNewAddress = (data: { id: string, value: string }) => ({ type: AddressActionTypes.SET_NEW_ADDRESS, data: data });
const validateNewAddress = () => ({ type: AddressActionTypes.VALIDATE_NEW_ADDRESS });
const setAddressListModal = (data: { open: boolean, addressModalType: 'Shipping' | 'Billing' }) => ({ type: AddressActionTypes.SET_ADDRESS_LIST_MODAL, data: data });
const setBillingAsShipping = () => ({ type: AddressActionTypes.SET_BILLING_AS_SHIPPING });
const getAddresses = () => ({ type: AddressActionTypes.GET_ADDRESSES });
const setEditAddressError = (data: { errorObject: AddressErrorProps }) => ({ type: AddressActionTypes.SET_EDIT_ADDRESS_ERROR, data: data });
const validateEditAddress = () => ({ type: AddressActionTypes.VALIDATE_EDIT_ADDRESS });
const setEditAddressId = (data: { id: string }) => ({ type: AddressActionTypes.SET_EDIT_ADDRESS_ID, data: data });
const setEditAddressModal = (data: { open: boolean }) => ({ type: AddressActionTypes.SET_EDIT_ADDRESS_MODAL, data: data });
const setEditAddressValues = (data: { id: string, value: string }) => ({ type: AddressActionTypes.SET_EDIT_ADDRESS_VALUES, data: data });
const setDeleteAddressId = (data: { id: string }) => ({ type: AddressActionTypes.SET_DELETE_ADDRESS_ID, data: data });
export const AddressActions = {
  addNewAddress: addNewAddress,
  editAddress: editAddress,
  deleteAddress: deleteAddress,
  setShippingAddress: setShippingAddress,
  setAddressModal: setAddressModal,
  setBillingAddress: setBillingAddress,
  setNewAddress: setNewAddress,
  validateNewAddress: validateNewAddress,
  setAddressListModal: setAddressListModal,
  setBillingAsShipping: setBillingAsShipping,
  getAddresses: getAddresses,
  setEditAddressValues: setEditAddressValues,
  setEditAddressError: setEditAddressError,
  validateEditAddress: validateEditAddress,
  setEditAddressId: setEditAddressId,
  setEditAddressModal: setEditAddressModal,
  setDeleteAddressId: setDeleteAddressId,
};
