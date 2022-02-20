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
