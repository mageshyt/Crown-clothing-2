import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Home/Header";
import HomePage from "./components/Screen/HomePage";
import LoginPage from "./components/Screen/LoginPage";
import ShopPage from "./components/Screen/ShopPage";
import { useAuth } from "./firebase";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
function App({ history }) {
  const currentUser = useAuth();
  useEffect(() => {
    history.push("/");
  }, [currentUser]);
  return (
    <div className="App light">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" component={LoginPage} />
    </div>
  );
}
export default withRouter(App);
