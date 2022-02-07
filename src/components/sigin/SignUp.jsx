import React from "react";
import styled from "styled-components";
import {
  AtSymbolIcon,
  LockClosedIcon,
  LoginIcon,
  PencilAltIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { signInWithGoogle, signUp, useAuth } from "../../firebase";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
const style = {
  input: `outline-none w-full bg-gray-200  border-none`,
  inputContainer: `w-full p-2 max-w-[400px]  bg-gray-200   h-[55px]  my-4 rounded-full flex items-center `,
  socialIcon: `h-8 cursor-pointer  w-8 text-gray-600`,
  social: `border-[2px] rounded-full m-2 border-gray-900 p-1`,
};

const SignUp = () => {
  // * use ref to get user mail and password
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const [loading, setLoading] = React.useState(false);
  async function handleSignUp() {
    // ! it it was empty then we will not sign up
    setLoading(true);

    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
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
        {/* other plat form */}
        {/* <p className="text-lg pt-3">Or sign in with other plat form</p>
      <SocialMediaContainer className="flex items-center ">
        <div className={style.social}>
          <FcGoogle onClick={signInWithGoogle} className={style.socialIcon} />
        </div>
        <div className={style.social}>
          <AiOutlineTwitter className={` ${style.socialIcon} text-blue-400 `} />
        </div>
        <div className={style.social}>
          <MdOutlineFacebook
            className={` ${style.socialIcon} text-blue-400 `}
          />
        </div>
      </SocialMediaContainer> */}
      </form>
    </div>
  );
};

export default SignUp;
const SocialMediaContainer = styled.div``;

const EmailContainer = styled.div``;

const UserContainer = styled.div``;

const PasswordContainer = styled.div``;

const SubmitButton = styled.div``;
