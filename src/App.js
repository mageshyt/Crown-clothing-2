import { Route, Routes } from "react-router-dom";
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
function App({ setCurrentUser }) {
  const currentUser = useAuth();
  setCurrentUser(currentUser);
  useEffect(() => {
    // history.push("/");
  }, [currentUser]);

  return (
    <div className="App light">
      <Header />
      {/* <Routes> */}

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<LoginPage />} />
      </Routes>

      {/* </Routes> */}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
