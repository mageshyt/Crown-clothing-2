import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

// ! middle-ware -> function in the middle
// ! of the application that allows us to intercept
// ! actions and either prevent their default
// ! behavior or to dispatch other actions

const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
