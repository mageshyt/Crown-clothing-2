import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { fetchCollectionSuccessAsync } from "../../redux/shop/shop.actions";
import {
  selectCollectionLoaded,
  selectIsCollectionFetching,
} from "../../redux/shop/shop.selector";
// import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import CollectionOverview from "../Shop/Colleciton-overview";
import WithSpinner from "../withspinner/WithSpinner";
import collectionPage from "./collectionPage";
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(collectionPage);
const ShopPage = ({ match, isFetching, fetchData, isCollectionLoaded }) => {
  // ! fetch collection Data from Firebase
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner
            isLoading={!isCollectionLoaded}
            {...props}
          />
        )}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionLoaded} // ! if there is no collection loaded, then show spinner
            {...props}
          />
        )}
      />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCollectionSuccessAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
