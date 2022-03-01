// ! we need initial state

import CartActionTypes from "./cart.types";

import { addItemToCart, RemoveItemToCart } from "./cart.utils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload), // ! adding our existing cartItems with new item
      };
    // ! to remove item
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: RemoveItemToCart(state.cartItems, action.payload),
      };
    // ! to clear item
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;
