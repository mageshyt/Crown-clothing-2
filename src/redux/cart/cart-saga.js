import { call, takeLatest, put, all } from "redux-saga/effects";
import { clearCart } from "./cart.action";
import CartActionTypes from "./cart.types";

export function* emptyCart() {
  try {
    yield put(clearCart());
  } catch (error) {
    yield console.log(error);
  }
}
export function* onClearCart() {
  yield takeLatest(CartActionTypes.CLEAR_CART, emptyCart);
}

export function* cartSaga() {
  yield all([]);
}
