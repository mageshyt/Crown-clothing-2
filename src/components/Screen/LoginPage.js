import React from "react";
import SignIn from "../sigin/SignIn";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="">
      <button onClick={""}></button> {/* sigin */}
      <SignIn />
    </div>
  );
};

export default withRouter(LoginPage);
