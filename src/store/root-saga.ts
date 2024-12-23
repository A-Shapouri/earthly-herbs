import { spawn } from 'redux-saga/effects';
import authMiddleware from '@store/auth/auth-middleware';
import addressMiddleware from '@store/address/address-middleware';
import productsMiddleware from './products/products-middleware'

export default function* rootSaga() {
  yield spawn(authMiddleware);
  yield spawn(addressMiddleware);
  yield spawn(productsMiddleware);
}
