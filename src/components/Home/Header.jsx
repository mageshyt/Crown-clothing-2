import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container className="flex items-center justify-between h-14 bg-gray-200">
      {/* Logo */}
      <div className="logo-image ml-4">
        <img src="/images/crown.svg" alt="logo " />
      </div>
      {/* header section */}
      <div className="sections text-xs font-bold flex  flex-row space-x-8">
        {/* Link to Home */}
        <Link to="/" className="">
          <h2>Home</h2>
        </Link>
        {/* Link to shop*/}
        <Link to="/shop" className="">
          <h2>Shop</h2>
        </Link>
        <h2>pages</h2>
        <h2>Contact</h2>
        {/* login and logo */}
        <div className="login-section flex flex-row space-x-2 mr-4 invisible md:visible">
          <h2 className="font-bold btn btn-md ">Sign up</h2>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};
export default connect(mapStateToProps)(Header);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  .logo-image {
    margin-left: 1rem;
  }
  .sections {
    display: flex;
    align-items: center;
    column-gap: 25px;
    font-size: 14px;
    font-weight: 500;
    margin-right: 1rem;
  }
`;
