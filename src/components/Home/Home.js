import { Banner } from "./Banner";
import React from "react";
import Header from "./Header";
import MenuItems from "./MenuItems";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Banner />
      <div className="flex items-center justify-center">
        <MenuItems />
      </div>
    </div>
  );
};
export default Home;
