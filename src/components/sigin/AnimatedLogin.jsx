import React, { useState } from "react";
import styled from "styled-components";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
const style = {
  input: `outline-none w-full bg-transparent border-none`,
  inputContainer: `w-full p-2 max-w-[400px] h-[55px]  bg-gray-200 my-4 rounded-full flex items-center `,
  socialIcon: `h-8 cursor-pointer  w-8 text-gray-600`,
  social: `border-[2px] rounded-full m-2 border-gray-900 p-1`,
  h3: `font-bold text-xl text-white leading-1`,
};
// const Anim = () => ;
const AnimatedLogin = () => {
  const [singUpCheck, setSignUp] = useState(false);
  //   const [signIn, setSignIn] = React.useState(false);

  const handleAnimation = () => {
    setSignUp(!singUpCheck);
    console.log(singUpCheck);
  };

  return (
    <Container className=" bg-white">
      <Signin_SignUp className="mt-10">
        {singUpCheck ? <SignUp /> : <SignIn handleSignUp={handleAnimation} />}
      </Signin_SignUp>
    </Container>
  );
};

export default AnimatedLogin;

const Container = styled.div``;

const Signin_SignUp = styled.div``;
