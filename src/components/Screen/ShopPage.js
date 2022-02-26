import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
// import { fetchCollectionAsync } from "../../redux/shop/shop.saga";
import CollectionOverviewContainer from "../Shop/Collection/Collection-overview.container";
import CollectionPageContainer from "../Shop/Collection/CollectionContainer";

const ShopPage = ({ match, fetchCollectionStart }) => {
  // ! fetch collection Data from Firebase
  useEffect(() => {
    fetchCollectionStart();
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
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
