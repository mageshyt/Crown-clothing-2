import React, { useContext } from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "./Collection-preview";
import collectionContext from "../../../context/collections/collection.context";
const CollectionOverview = () => {
  //! using use selector to get the data from the store
  // const collection = useSelector(selectCollectionForPreview);
  const collection = useContext(collectionContext);
  return (
    <div>
      {collection.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
