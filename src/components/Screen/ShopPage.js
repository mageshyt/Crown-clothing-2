import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../Shop/Colleciton-overview";
import collectionPage from "./collectionPage";
const ShopPage = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={collectionPage}
      />
    </div>
  );
};

export default ShopPage;
