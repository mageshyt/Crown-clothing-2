import { collection, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { db } from "../../firebase";
import { setCollectionData } from "../../redux/shop/shop.actions";
import { setCurrentUser } from "../../redux/user reducer/user.action";
import { selectCurrentUser } from "../../redux/user reducer/user.selector";

import CollectionOverview from "../Shop/Colleciton-overview";
import WithSpinner from "../withspinner/WithSpinner";
import collectionPage from "./collectionPage";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(collectionPage);

const ShopPage = ({ match, setCollectionData }) => {
  // ! for loading
  const [loading, setLoading] = useState(true);
  // ! fetch collection Data from Firebase
  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, "collections");
      getDocs(collectionRef).then((snapshot) => {
        const transFormedCollection = snapshot.docs.map((doc) => {
          const { title, items } = doc.data();

          return {
            routerName: encodeURI(title.toLowerCase()),
            title,
            items,
            id: doc.id,
          };
        });

        const reduced = transFormedCollection.reduce(
          (accumulator, collection) => {
            accumulator[collection.title.toLowerCase()] = collection;
            return accumulator;
          },
          {}
        );
        console.log("reduced -->", reduced);
        //! what we are doing here means means we are creating a new object and make title alone to small case & keep remaining unChange and return it like accumulator
        setCollectionData(reduced);
        setLoading(false);
      });
    };
    fetchData();
  }, [match.path]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCollectionData: (collectionData) =>
    dispatch(setCollectionData(collectionData)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
