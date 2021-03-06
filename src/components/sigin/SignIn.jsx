import React from "react";
import styled from "styled-components";
import {
  LockClosedIcon,
  LoginIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";
import { login } from "../../firebase";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { connect } from "react-redux";
import {
  emailSignInStart,
  EmailSignInStart,
  googleSignInStart,
} from "../../redux/user reducer/user.action";

const style = {
  input: `outline-none font-bold w-full bg-transparent border-none`,
  inputContainer: `w-full p-2 max-w-[400px] h-[55px]  bg-gray-200 my-4 rounded-full flex items-center `,
  socialIcon: `h-8 cursor-pointer  w-8 text-gray-600`,
  social: `border-[2px] rounded-full m-2 border-gray-900 p-1`,
};

const SignIn = ({ handleSignUp, googleSignInStart, emailSignInStart }) => {
  // * use ref to get user mail and password
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  // !sign with google in handel
  const handleGoogleSignIn = async () => {
    try {
      googleSignInStart();
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };
  // !sign with email in handel
  const handleEmailSignIn = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    emailSignInStart(email, password);
  };
  // React.useEffect(() => {}, [currentUser]);
  return (
    <div className="flex items-center justify-center w-full">
      <form
        className="w-[500px] justify-center items-center flex flex-col"
        action=""
      >
        <span className="title text-3xl mb-4">Sign in</span>
        {/* Email */}
        <EmailContainer className={style.inputContainer}>
          <MdEmail className="h-8 w-8 ml-2 mr-2   text-gray-500" />
          <input
            className={style.input}
            type="email"
            name="Email"
            placeholder="Email"
            ref={emailRef}
          />
        </EmailContainer>
        {/* Password */}
        <PasswordContainer className={style.inputContainer}>
          <LockClosedIcon className="h-8 w-8 ml-2 mr-2   text-gray-600" />
          <input
            className={style.input}
            type="password"
            name="password"
            placeholder="password"
            ref={passwordRef}
          />
        </PasswordContainer>

        {/* Submit */}
        <div className="w-full mt-2 flex  justify-center flex-row gap-2">
          {/* Login */}
          <div
            onClick={handleEmailSignIn}
            className="border cursor-pointer border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-3/12 text-indigo-500 center flex-row  gap-1"
          >
            <LoginIcon className="h-4 w-4 ml-2 mr-1" />
            <button className="" type="submit">
              Login
            </button>
          </div>
          {/* sign up */}
          <div
            // disabled={loading}
            onClick={handleSignUp}
            className="signup "
          >
            <PencilAltIcon className="h-4 w-4 ml-2 mr-1" />
            <span>sign up</span>
          </div>
        </div>
        {/* other plat form */}
        <p className="text-lg pt-3">Or sign in with other plat form</p>
        <SocialMediaContainer className="flex items-center ">
          <div className={style.social}>
            <FcGoogle
              onClick={handleGoogleSignIn}
              className={style.socialIcon}
            />
          </div>
          <div className={style.social}>
            <AiOutlineTwitter
              className={` ${style.socialIcon} text-blue-400 `}
            />
          </div>
          <div className={style.social}>
            <MdOutlineFacebook
              className={` ${style.socialIcon} text-blue-400 `}
            />
          </div>
        </SocialMediaContainer>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
const SocialMediaContainer = styled.div``;

const EmailContainer = styled.div``;

const PasswordContainer = styled.div``;
