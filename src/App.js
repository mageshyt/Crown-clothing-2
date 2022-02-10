import { Link, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Header from "./components/Home/Header";
import HomePage from "./components/Screen/HomePage";
import LoginPage from "./components/Screen/LoginPage";
import ShopPage from "./components/Screen/ShopPage";
import { useAuth } from "./firebase";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user reducer/user.action";
import CheckOutPage from "./components/Screen/CheckOutPage";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user reducer/user.selector";
function App({ setCurrentUser }) {
  const currentUser = useAuth();
  setCurrentUser(currentUser);
  useEffect(() => {
    // history.push("/");
  }, []);

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
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
