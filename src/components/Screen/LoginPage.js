import React from "react";
import SignIn from "../sigin/SignIn-a";
import styled from "styled-components";
import AnimatedLogin from "../sigin/AnimatedLogin";
import { useAuth } from "../../firebase";
const LoginPage = () => {
  // const currentUser = useAuth();
  // console.log(currentUser);
  return (
    <div className="bg-[#ffffff] flex  justify-center h-screen">
      {/* <SignIn /> */}
      <div className="mt-[200px]">
        <AnimatedLogin />
      </div>
    </div>
  );
};

export default LoginPage;
