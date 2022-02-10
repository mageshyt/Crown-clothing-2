import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user reducer/user.selector";
import { Banner } from "../Home/Banner";
import Header from "../Home/Header";
import MenuItems from "../Home/MenuItems";
import styled from "styled-components";
const HomePage = ({ currentUser }) => {
  // console.log("currentUser",);
  const WelcomeWish = (name) => {

    toast.success(`Welcome Back ${name || "Guest"}`);
  };
  useEffect(() => {
    const name = currentUser?.displayName;
    if (currentUser !== null) {
      WelcomeWish(name);
    }
  }, [currentUser]);

  return (
    <Container className="h-screen">
      <div className="toaster">
        <Toaster reverseOrder={false} />
      </div>
      {/* <Header /> */}

      {/* <Banner /> */}
      <div className="flex items-center justify-center">
        <MenuItems />
      </div>
    </Container>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const Container = styled.div`
  .toaster {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
`;
export default connect(mapStateToProps)(HomePage);
