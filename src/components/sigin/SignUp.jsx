import React from "react";
import styled from "styled-components";
import { LockClosedIcon, UserCircleIcon } from "@heroicons/react/outline";
import { createUserProfileDocument, signUp, useAuth } from "../../firebase";

import { MdEmail } from "react-icons/md";
import { signUpStart } from "../../redux/user reducer/user.action";
import { connect } from "react-redux";
const style = {
  input: `outline-none w-full bg-gray-200 font-bold border-none`,
  inputContainer: `w-full p-2 max-w-[400px]  bg-gray-200   h-[55px]  my-4 rounded-full flex items-center `,
  socialIcon: `h-8 cursor-pointer  w-8 text-gray-600`,
  social: `border-[2px] rounded-full m-2 border-gray-900 p-1`,
};

const SignUp = ({ signUpStart }) => {
  // * use ref to get user mail and password
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const displayName = React.createRef();
  const [loading, setLoading] = React.useState(false);
  const currentUser = useAuth();
  async function handleSignUp(event) {
    event.preventDefault();

    // ! it  was empty then we will not sign up
    setLoading(true);
    const email = emailRef.current.value;

    const password = passwordRef.current.value;
    const name = displayName.current.value;
    console.log(email, password);
    signUpStart(email, password, name);
    setLoading(false);
    // await createUserProfileDocument(await currentUser);
  }

  return (
    <div className="flex items-center justify-center w-full">
      <form
        className="w-[500px] justify-center items-center flex flex-col"
        action=""
      >
        <span className="title text-3xl mb-4">Sign in</span>
        {/* Email */}
        <UserContainer className={style.inputContainer}>
          <UserCircleIcon className="h-8 w-8 ml-2 mr-2   text-gray-600" />
          <input
            className={style.input}
            type="text"
            name="userName"
            placeholder="username"
            ref={displayName}
          />
        </UserContainer>

        <EmailContainer className={style.inputContainer}>
          <MdEmail className="h-8 w-8 ml-2 mr-2   text-gray-500" />
          <input
            ref={emailRef}
            className={style.input}
            type="email"
            name="Email"
            placeholder="Email"
          />
        </EmailContainer>
        {/* Password */}
        <PasswordContainer className={style.inputContainer}>
          <LockClosedIcon className="h-8 w-8 ml-2 mr-2   text-gray-600" />
          <input
            ref={passwordRef}
            className={style.input}
            type="password"
            name="password"
            placeholder="password"
          />
        </PasswordContainer>

        {/* Submit */}
        <SubmitButton
          onClick={handleSignUp}
          className="signup font-bold w-3/12"
        >
          Sign up
        </SubmitButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, name) =>
    dispatch(signUpStart({ email, password, name })),
});
export default connect(null, mapDispatchToProps)(SignUp);

const EmailContainer = styled.div``;

const UserContainer = styled.div``;

const PasswordContainer = styled.div``;

const SubmitButton = styled.div``;
