/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import CollectionOverviewContainer from "../Shop/Collection/Collection-overview.container";
import CollectionPageContainer from "../Shop/Collection/CollectionContainer";

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  const fetchCollection = () => dispatch(fetchCollectionStart());

  // ! fetch collection Data from Firebase
  useEffect(() => {
    fetchCollection();
  }, [fetchCollection]);

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

export default ShopPage;
