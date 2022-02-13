import SHOP_DATA from "./shop.data";
import { ShopType } from "./shop.type";

const INITIAL_STATE = {
  collections: {},
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopType.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
