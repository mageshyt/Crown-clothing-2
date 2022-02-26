import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../../redux/shop/shop.selector";
import CollectionPreview from "./Collection-preview";
const CollectionOverview = ({ collection }) => {
  return (
    <div>
      {collection.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  // ! we can use this selector to get the data from the store,
  collection: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
