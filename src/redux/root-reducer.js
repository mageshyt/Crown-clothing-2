// ! combine all state together
import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user reducer/user.reducer";
import { persistReducer } from "redux-persist";
// * our first reducer
import sessionStorage from "redux-persist/lib/storage"; // ! we get actually  storage from browser
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
//! it is big json object which contain our data
const persistConfig = {
  // ! it just a big json object
  key: "root",
  storage: sessionStorage,
  whitelist: ["cart"], // ! we only want to persist cart
};
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
