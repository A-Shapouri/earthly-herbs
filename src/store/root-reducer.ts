import { combineReducers } from 'redux';
import authReducer from './auth/auth-reducer';
import shopReducer from './shop/shop-reducer';
import addressReducer from './address/address-reducer';

const rootReducer: any = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  address: addressReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
