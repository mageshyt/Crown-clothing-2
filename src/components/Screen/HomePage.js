import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import MenuItems from "../Home/MenuItems";
import styled from "styled-components";
import { useSelector } from "react-redux";
const HomePage = () => {
  // console.log("currentUser",);
  const currentUser = useSelector((state) => state.user.currentUser);
  const WelcomeWish = (name) => {
    toast.success(`Welcome Back ${name || "Guest"}`);
  };
  useEffect(() => {
    const name = currentUser?.displayName;

    if (currentUser !== null) {
      WelcomeWish(name || currentUser.name);
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

const Container = styled.div`
  .toaster {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
`;
export default HomePage;
