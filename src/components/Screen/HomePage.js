import React from "react";
import { Banner } from "../Home/Banner";
import Header from "../Home/Header";
import MenuItems from "../Home/MenuItems";
const HomePage = () => {
  return (
    <div className="h-screen">
      {/* <Header /> */}

      {/* <Banner /> */}
      <div className="flex items-center justify-center">
        <MenuItems />
      </div>
    </div>
  );
};
export default HomePage;
