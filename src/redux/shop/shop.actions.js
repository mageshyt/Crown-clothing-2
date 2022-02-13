import { ShopType } from "./shop.type";

export const setCollectionData = (collectionData) => ({
  type: ShopType.UPDATE_COLLECTIONS,
  payload: collectionData,
});
