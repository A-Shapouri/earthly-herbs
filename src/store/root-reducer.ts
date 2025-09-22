import { combineReducers } from 'redux';
import authReducer from './auth/auth-reducer';
import shopReducer from './shop/shop-reducer';
import addressReducer from './address/address-reducer';
import alertReducer from './alert/alert-reducer';
import productsReducer from './products/products-reducer';
import navigationReducer from './navigation/navigation-reducer';

const rootReducer: any = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  address: addressReducer,
  alert: alertReducer,
  products: productsReducer,
  navigation: navigationReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
