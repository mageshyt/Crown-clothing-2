import React from "react";
import AnimatedLogin from "../sigin/AnimatedLogin";
const LoginPage = () => {
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
