import { createSelector } from "reselect";
const shopData = (state) => state.shop;

export const selectCollections = createSelector(
  [shopData],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam] // ! it will return corresponding value
  );
