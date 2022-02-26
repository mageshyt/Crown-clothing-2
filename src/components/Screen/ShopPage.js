import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { fetchCollectionSuccessAsync } from "../../redux/shop/shop.actions";
import {
  selectCollectionLoaded,
  selectIsCollectionFetching,
} from "../../redux/shop/shop.selector";
import CollectionOverview from "../Shop/Collection/Collection-overview";
import CollectionOverviewContainer from "../Shop/Collection/Collection-overview.container";
import CollectionPageContainer from "../Shop/Collection/CollectionContainer";

const ShopPage = ({ match, fetchData }) => {
  // ! fetch collection Data from Firebase
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCollectionSuccessAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
