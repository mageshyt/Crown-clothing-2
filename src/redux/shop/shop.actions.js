import { ShopType } from "./shop.type";

// export const setCollectionData = (collectionData) => ({
//   type: ShopType.UPDATE_COLLECTIONS,
//   payload: collectionData,
// });

export const fetchCollectionStart = () => ({
  type: ShopType.FETCH_COLLECTIONS_START,
});

// ! success call
export const fetchCollectionSuccess = (collectionData) => ({
  type: ShopType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionData,
});
// ! error call
export const fetchCollectionFailure = (errorMessage) => ({
  type: ShopType.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionSuccessAsync = () => {};
