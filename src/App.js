import { Link, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Header from "./components/Home/Header";
import HomePage from "./components/Screen/HomePage";
import LoginPage from "./components/Screen/LoginPage";
import ShopPage from "./components/Screen/ShopPage";
import {
  addCollectionAndDocuments,
  createUserProfileDocument,
  db,
  useAuth,
} from "./firebase";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user reducer/user.action";
import CheckOutPage from "./components/Screen/CheckOutPage";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user reducer/user.selector";

import { collection, onSnapshot } from "firebase/firestore";
import { setCollectionData } from "./redux/shop/shop.actions";
function App({ setCurrentUser, setCollectionData }) {
  const currentUser = useAuth();
  setCurrentUser(currentUser);
  useEffect(() => {
    createUserProfileDocument(currentUser);
    // history.push("/");
  }, [currentUser]);
  // ! fetch collection Data from Firebase
  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, "collections");
      onSnapshot(collectionRef, (snapshot) => {
        const transFormedCollection = snapshot.docs.map((doc) => {
          const { title, items } = doc.data();

          return {
            routerName: encodeURI(title.toLowerCase()),
            title,
            items,
            id: doc.id,
          };
        });
        console.log(
          "👉🏻   ~ transFormedCollection ~ transFormedCollection",
          transFormedCollection
        );
        const reduced = transFormedCollection.reduce(
          (accumulator, collection) => {
            accumulator[collection.title.toLowerCase()] = collection;
            return accumulator;
          },
          {}
        );
        //! what we are doing here means means we are creating a new object and make title alone to small case & keep remaining unChange and return it like accumulator
        console.log("👉🏻   ~ onSnapshot ~ reduced", reduced);
        setCollectionData(reduced);
      });
    };
    fetchData();
  }, [currentUser]);

  return (
    <div className="App light">
      <Header />
      {/* <Routes> */}

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)}
        />
        <Route exact path="/checkout" component={CheckOutPage} />
        {/* <Route path="/contact" component={ContactPage} /> */}
      </Switch>

      {/* </Routes> */}
    </div>
  );
}

const mapStateToProps = (state) =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
  });
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setCollectionData: (collectionData) =>
    dispatch(setCollectionData(collectionData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
