import React from "react";
import { withRouter } from "react-router";

// import app from "../../firebase";
import { signUp } from "../../firebase";

const Header = ({ history }) => {
  return (
    <div className="flex items-center justify-between h-14 bg-gray-200">
      {/* Logo */}
      <div
        className="logo-image ml-4 cursor-pointer "
        onClick={() => history.push("/")}
      >
        <img src="/images/crown.svg" alt="logo " />
      </div>
      {/* header section */}
      <div className="sections font-bold flex text-lg  flex-row space-x-8">
        <h2>Home</h2>
        <h2>Shop</h2>
        <h2>pages</h2>
        <h2>Contact</h2>
      </div>
      {/* login and logo */}
      <div
        // onClick={siginWithGoogle()}
        className="login-section flex flex-row space-x-2 mr-4  sm:visible "
      >
        {/* onclick it push to sign in  page*/}
        <h2
          onClick={() => history.push("/signin")}
          className="font-bold btn btn-sm "
        >
          Login in
        </h2>
      </div>
    </div>
  );
};

export default withRouter(Header);
