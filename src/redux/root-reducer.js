// ! combine all state together
import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user reducer/user.reducer";

// * our first reducer

export default combineReducers({
  // ! which will return into one big object
  user: userReducer,
  cart: cartReducer,
});
