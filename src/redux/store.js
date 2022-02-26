import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { fetchCollectionStart } from "./shop/shop.saga";
import rootSaga from "./root-saga";
// ! middle-ware -> function in the middle

// ! of the application that allows us to intercept
// ! actions and either prevent their default
// ! behavior or to dispatch other actions

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store); // ! to store the data in browser
export default { store, persistor };
