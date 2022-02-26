import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../../redux/shop/shop.selector";
import WithSpinner from "../../withspinner/WithSpinner";
import CollectionOverview from "./Collection-overview";
const mapStateToProps = createStructuredSelector({
  isLoading: !selectIsCollectionFetching,
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner(CollectionOverview)
);

export default CollectionPageContainer;
