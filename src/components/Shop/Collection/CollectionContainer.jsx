import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionLoaded } from "../../../redux/shop/shop.selector";
// CollectionOverview;
import WithSpinner from "../../withspinner/WithSpinner";
import CollectionPage from "../../Screen/collectionPage";
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
