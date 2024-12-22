import {ProductsActionTypes} from './products-actions';
import {ProductsReducerProps} from './products';

export const initialState: ProductsReducerProps = {
  products: [],
  listLoading: true,
  tags: ["insider", "tonic", "premium", "new", "classic", "fresh", "essential", "night", "floral", "gold"],
  categories: ["chai", "smoothie", "spices", "hibiscus", "immunity", "organic", "lemonade", "tonic"],
  selectedTags: [],
  selectedCategory: null,
  sortBy: null,
  caffeineLevel: [1, 2, 3, 4, 5],
  priceRange: {
    min: 0,
    max: 100,
  },
  productItem: null,
  productsDetailsLoading: true,
  productItemId: null
};

function productsReducer(state = initialState, action: { payload: any, type: any }) {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS_LIST: {
      return {
        ...state,
        listLoading: true,
      };
    }
    case ProductsActionTypes.SET_PRODUCTS_LIST: {
      return {
        ...state,
        listLoading: false,
        products: action.payload.data
      };
    }
    case ProductsActionTypes.REMOVE_FILTER_TAG: {
      const tags = state.selectedTags.map((value) => value);
      console.log(tags.indexOf(action.payload.tag))
      tags.splice(tags.indexOf(action.payload.tag), 1);
      return {
        ...state,
        listLoading: true,
        selectedTags: tags,
      };
    }
    case ProductsActionTypes.ADD_FILTER_TAG: {
      const tags = state.selectedTags.map((value) => value);
      tags.push(action.payload.tag);
      return {
        ...state,
        listLoading: true,
        selectedTags: tags,
      };
    }
    case ProductsActionTypes.SET_PRICE_RANGE: {
      return {
        ...state,
        listLoading: true,
        priceRange: action.payload,
      };
    }
    case ProductsActionTypes.SET_FILTER_CATEGORY: {
      return {
        ...state,
        listLoading: true,
        selectedCategory: action.payload.category,
      };
    }
    case ProductsActionTypes.SET_CAFFEINE_LEVEL: {
      const levels = state.caffeineLevel.map((value) => value);
      const index = levels.indexOf(action.payload.level);

      if (index === -1) {
        levels.push(action.payload.level);
      } else {
        levels.splice(index, 1);
      }

      return {
        ...state,
        listLoading: true,
        caffeineLevel: levels,
      };
    }
    case ProductsActionTypes.SET_SORT_BY: {
      return {
        ...state,
        listLoading: true,
        sortBy: action.payload.sort,
      };
    }
    case ProductsActionTypes.CLEAR_FILTER_PRODUCTS: {
      return {
        ...state,
        listLoading: true,
        selectedTags: initialState.selectedTags,
        selectedCategory: initialState.selectedCategory,
        sortBy: initialState.sortBy,
        caffeineLevel: initialState.caffeineLevel,
        priceRange: {
          min: initialState.priceRange.min,
          max: initialState.priceRange.max,
        },
      };
    }
    case ProductsActionTypes.GET_PRODUCT_DETAILS: {
      return {
        ...state,
        productsDetailsLoading: true,
        productItemId: action.payload.productId,
      };
    }
    case ProductsActionTypes.SET_PRODUCT_DETAILS: {
      return {
        ...state,
        productsDetailsLoading: false,
        productItem: action.payload.productItem,
      }
    }
    default:
      return state;
  }
}

export default productsReducer;
