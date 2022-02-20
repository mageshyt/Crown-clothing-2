import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./components/Home/Header";
import HomePage from "./components/Screen/HomePage";
import LoginPage from "./components/Screen/LoginPage";
import ShopPage from "./components/Screen/ShopPage";
import { createUserProfileDocument, useAuth } from "./firebase";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user reducer/user.action";
import CheckOutPage from "./components/Screen/CheckOutPage";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user reducer/user.selector";

function App({ setCurrentUser }) {
  // ! get our current user
  const currentUser = useAuth();
  // ! update the current user for reducer
  setCurrentUser(currentUser);
  useEffect(() => {
    createUserProfileDocument(currentUser);
    // history.push("/");
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
