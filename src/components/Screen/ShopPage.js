import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CollectionOverview from "../Shop/Colleciton-overview";
import collectionPage from "./collectionPage";
import styled from "styled-components";
const ShopPage = ({ collection, match }) => {
  console.log(match);
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
