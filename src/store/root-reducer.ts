import { combineReducers } from 'redux';
import authReducer from './auth/auth-reducer';
import shopReducer from './shop/shop-reducer';

const rootReducer: any = combineReducers({
  auth: authReducer,
  shop: shopReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
