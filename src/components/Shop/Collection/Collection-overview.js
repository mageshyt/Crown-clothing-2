import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionForPreview } from "../../../redux/shop/shop.selector";
import CollectionPreview from "./Collection-preview";
const CollectionOverview = () => {
  //! using use selector to get the data from the store
  const collection = useSelector(selectCollectionForPreview);
  return (
    <div>
      {collection.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
