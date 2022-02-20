import { ShopType } from "./shop.type";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopType.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopType.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopType.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false, //! it already finished the api request
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
