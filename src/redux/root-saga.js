import { all, call } from "redux-saga/effects";
import { cartSaga } from "./cart/cart-saga";
import { fetchCollectionStart } from "./shop/shop.saga";
import { userSaga } from "./user reducer/user.saga";
export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSaga), call(cartSaga)]);
  //! we can initialize multiple sagas
}
