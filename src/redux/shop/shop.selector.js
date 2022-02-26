import { createSelector } from "reselect";
const shopData = (state) => state.shop;

export const selectCollections = createSelector(
  [shopData],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => (collections ? collections[collectionUrlParam] : null) // ! it will return corresponding value
  );

export const selectIsCollectionFetching = createSelector(
  [shopData],
  (shop) => shop.isFetching
);

export const selectCollectionLoaded = createSelector(
  [shopData],
  (shop) => !!shop.collections //!  !! will return boolean value !!null --> false !!undefined --> false !!0 --> false !!{} --> true
  // ! wht this dose mean?
  // ! if there is no collection loaded, then show spinner
);
