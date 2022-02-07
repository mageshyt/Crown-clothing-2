import React from "react";

import { Link } from "react-router-dom";

// import app from "../../firebase";
import faker from "@faker-js/faker";
import { useAuth, logout } from "../../firebase";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { connect } from "react-redux";

const style = {
  searchBarContainer: `bg-gray-200 w-full  focus:outline-none focus:border-gray-600 transition duration-150 ease-in-out`,
  searchBar: `flex flex-1 hidden sm:flex mx-[0.8rem] w-max-[520px] items-center bg-gray-400 rounded-[0.8rem] hover:bg-[#cecfd2]`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-black placeholder:text-[#767676]`,
  searchBarIcon: `text-xl text-gray-600 ml-2 mr-2`,
};
const Header = ({ mapStateToProps }) => {
  const currentUser = useAuth();
  // console.log(currentUser?.photoURL);
  const handelLogout = async () => {
    try {
      await logout();
      console.log("logout");
    } catch (err) {
      alert(err);
    }
  };

  const image = faker.image.avatar();

  return (
    <div className="flex items-center justify-between h-14 bg-gray-200">
      {/* Logo and left*/}

      <div
        className="logo-image ml-4 cursor-pointer "
        // onClick={() => history.push("/")}
      >
        <Link to="/">
          <img src="/images/crown.svg" alt="logo " />
        </Link>
      </div>
      {/* searchbar middle */}
      <SearchBar />
      {/* header section */}
      <div className="sections font-bold flex text-lg mr-2 items-center   flex-row space-x-8">
        {/* list */}
        <div className="flex hidden md:inline-flex space-x-2">
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/shop">
            <h2>Shop</h2>
          </Link>
          <Link to="/contact">
            <h2>Contact</h2>
          </Link>
        </div>
        {/* login and logo */}
        <div className="login-section  flex flex-row   sm:visible ">
          {/* onclick it push to sign in  page*/}
          {!currentUser ? (
            <Link to="/signin">
              <CgProfile className="text-3xl text-gray-600 cursor-pointer" />
            </Link>
          ) : (
            <img
              src={currentUser?.photoURL || image}
              onClick={handelLogout}
              className="h-10 cursor-pointer w-10 rounded-full"
              alt="profile"
            />
          )}
        </div>
      </div>
    </div>
  );
};

const SearchBar = () => (
  <div className={style.searchBar}>
    <AiOutlineSearch className={style.searchBarIcon} />
    <input className={style.searchInput} type="text" placeholder="Search" />
  </div>
);

const mapStateToProps = (state) => ({
  // ! we are setting the currentUser to the state
  mapStateToProps: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
