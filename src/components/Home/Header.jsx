import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between h-14 bg-gray-200">
      {/* Logo */}
      <div className="logo-image ml-4">
        <img src="/images/crown.svg" alt="logo " />
      </div>
      {/* header section */}
      <div className="sections font-bold flex  flex-row space-x-8">
        <h2>Home</h2>
        <h2>Shop</h2>
        <h2>pages</h2>
        <h2>Contact</h2>
      </div>
      {/* login and logo */}
      <div className="login-section flex flex-row space-x-2 mr-4 invisible md:visible">
        <h2 className="font-bold btn btn-md ">Sign up</h2>
      </div>
    </div>
  );
};
export default Header;
