import { NavigationActionTypes } from './navigation-actions';
import { NavigationReducerTypes } from './navigation';

const initialState: NavigationReducerTypes = {
  navigation: null,
  lang: 'en',
};

function navigationReducer(state = initialState, action: any) {
  switch (action.type) {
    case NavigationActionTypes.SET_NAVIGATION:
      return {
        ...state,
        navigation: action?.data?.navigation,
      };

    case NavigationActionTypes.SET_LANG:
      return {
        ...state,
        lang: action?.data?.lang,
      };

    default:
      return state;
  }
}

export default navigationReducer;
