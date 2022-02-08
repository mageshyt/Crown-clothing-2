import CartActionTypes from "./cart.types";

// ! here no need to pass any payload we just use to hide the dropdown
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
