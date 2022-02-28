import { collection, getDocs } from "firebase/firestore";
import { takeLatest, call, put, takeEvery } from "redux-saga/effects";
import { convertCollectionsSnapshotToMap, db } from "../../firebase";
import { fetchCollectionFailure, fetchCollectionSuccess } from "./shop.actions";
import { ShopType } from "./shop.type";

// ! takeEvery -> take every action of a certain type
export function* fetchCollectionAsync() {
  yield console.log("i am Fired 🧨");
  try {
    const collectionRef = collection(db, "collections");
    const snapshot = yield getDocs(collectionRef);
    console.log(convertCollectionsSnapshotToMap(snapshot));

    const CollectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    // * here we are passing snapshot to convertCollectionsSnapshotToMap

    // ! put --> dispatch
    yield put(fetchCollectionSuccess(CollectionMap));
  } catch (err) {
    yield put(fetchCollectionFailure(err.message));
  }
}
export function* fetchCollectionStart() {
  yield takeLatest(ShopType.FETCH_COLLECTIONS_START, fetchCollectionAsync);
  //! takeEvery -> only going to fire one time
  // ! the moment when FETCH_COLLECTIONS_START is changes, it will call fetchCollectionAsync
}
