import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
// ! middle-ware -> function in the middle

// ! of the application that allows us to intercept
// ! actions and either prevent their default
// ! behavior or to dispatch other actions

const middleware = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store); // ! to store the data in browser
export default { store, persistor };
