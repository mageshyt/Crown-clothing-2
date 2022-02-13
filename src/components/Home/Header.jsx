import React from "react";

import { Link } from "react-router-dom";

// import app from "../../firebase";
import faker from "@faker-js/faker";
import { useAuth, logout } from "../../firebase";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { connect } from "react-redux";
import CartIcon from "../Shop/Cart/CartIcon";
import Cart_Drop_Down from "../Shop/Cart/Cart_Drop_Down";
import { selectCurrentUser } from "../../redux/user reducer/user.selector";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../Shop/Cart/card.selector";
const style = {
  searchBarContainer: `bg-gray-200 w-full  focus:outline-none focus:border-gray-600 transition duration-150 ease-in-out`,
  searchBar: `flex flex-1 hidden sm:flex mx-[0.8rem] w-max-[400px] items-center bg-[#cecfd2] rounded-[0.8rem] hover:bg-[#bfbfc1]`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-black placeholder:text-[#767676]`,
  searchBarIcon: `text-xl text-gray-600 ml-2 mr-2`,
};
const Header = ({ hidden, currentUser }) => {
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
    <div className="flex   items-center justify-between h-14 ">
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
      <div className="sections  pl-8 font-bold flex text-lg mr-2 items-center   flex-row space-x-8">
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
          {/* login */}
        </div>
      </div>
      <div>
        <div className="flex mr-2  text-lg font-bold items-center space-x-2">
          {!currentUser ? (
            <Link to="/signin">
              <h2 className="cursor-pointer">sign in</h2>
            </Link>
          ) : (
            <h2 onClick={handelLogout} className="cursor-pointer">
              sign out
            </h2>
          )}
          {/* Cart icon */}

          <CartIcon />
        </div>
        <div>{hidden ? null : <Cart_Drop_Down />}</div>
        {/* <Cart_Drop_Down /> */}
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

const mapStateToProps = (state) =>
  createStructuredSelector({
    // ! we are setting the currentUser to the state
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
  });

export default connect(mapStateToProps)(Header);

// {
//   /* login and logo */
// }
// <div className="login-section flex flex-row  hidden  sm:visible ">
//   {/* onclick it push to sign in  page*/}
//   {!currentUser ? (
//     <Link to="/signin">
//       {/* <CgProfile className="text-3xl text-gray-600 cursor-pointer" /> */}
//       <h2>sign in</h2>
//     </Link>
//   ) : (
//     // <img
//     //   src={currentUser?.photoURL || image}
//     //   onClick={handelLogout}
//     //   className="h-10 cursor-pointer w-10 rounded-full"
//     //   alt="profile"
//     // />
//     <h2>sign out</h2>
//   )}
// </div>;
