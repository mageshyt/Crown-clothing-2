import React from "react";

import { Link } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../Shop/Cart/CartIcon";
import Cart_Drop_Down from "../Shop/Cart/Cart_Drop_Down";
import { useAuth } from "../../firebase";
import { signOutStart } from "../../redux/user reducer/user.action";
import { clearCart } from "../../redux/cart/cart.action";
const style = {
  searchBarContainer: `bg-gray-200 w-full  focus:outline-none focus:border-gray-600 transition duration-150 ease-in-out`,
  searchBar: `flex flex-1 hidden sm:flex mx-[0.8rem] w-max-[400px] items-center bg-[#cecfd2] rounded-[0.8rem] hover:bg-[#bfbfc1]`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-black placeholder:text-[#767676]`,
  searchBarIcon: `text-xl text-gray-600 ml-2 mr-2`,
};
const Header = () => {
  const currentUser = useAuth();
  const hidden = useSelector((state) => state.cart.hidden);
  // clear cart
  const dispatch = useDispatch();
  const signOutStartMethod = () => dispatch(signOutStart());
  const clearCartItem = () => dispatch(clearCart());
  // ! sign out
  console.log(hidden);
  const handelLogout = async () => {
    try {
      await signOutStartMethod();
      clearCartItem();
      console.log("logout");
    } catch (err) {
      alert(err);
    }
  };

  // const image = faker.image.avatar();

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
      {/* search bar middle */}
      <SearchBar />
      {/* header section */}
      <NavItems />
      <UserIconAndCart
        hidden={hidden}
        handelLogout={handelLogout}
        currentUser={currentUser}
      />
    </div>
  );
};

const SearchBar = () => (
  <div className={style.searchBar}>
    <AiOutlineSearch className={style.searchBarIcon} />
    <input className={style.searchInput} type="text" placeholder="Search" />
  </div>
);

export default Header;

const UserIconAndCart = ({ currentUser, handelLogout, hidden }) => {
  return (
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
  );
};

const NavItems = () => {
  return (
    <div className="sections  pl-8 font-bold flex text-lg mr-2 items-center   flex-row space-x-8">
      {/* list */}
      <div className=" hidden md:flex space-x-2">
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
  );
};
