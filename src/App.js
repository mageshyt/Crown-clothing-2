import { Link, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Header from "./components/Home/Header";
import HomePage from "./components/Screen/HomePage";
import LoginPage from "./components/Screen/LoginPage";
import ShopPage from "./components/Screen/ShopPage";
import { useAuth } from "./firebase";
import { useEffect } from "react";
import { createUserProfileDocument } from "./firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user reducer/user.action";
function App({ setCurrentUser, user }) {
  const currentUser = useAuth();
  setCurrentUser(currentUser);
  useEffect(() => {
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
      </Switch>

      {/* </Routes> */}
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
