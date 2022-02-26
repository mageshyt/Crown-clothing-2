import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import {
  selectCollectionLoaded,
  selectIsCollectionFetching,
} from "../../../redux/shop/shop.selector";

import WithSpinner from "../../withspinner/WithSpinner";
import CollectionOverview from "./Collection-overview";
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);
// ! compose will nothing but it is curried functions
export default CollectionOverviewContainer;
