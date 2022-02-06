import React from "react";
// import {
//   AtSymbolIcon,
//   GlobeIcon,
//   LockClosedIcon,
//   LoginIcon,
//   PencilAltIcon,
// } from "@heroicons/react/outline";
// import { FaGoogle } from "react-icons/fa";
import styled from "styled-components";
import { signInWithGoogle, signUp, useAuth } from "../../firebase";

const SignIn = ({ history }) => {
  // // * use ref to get user mail and password
  // const emailRef = React.createRef();
  // const passwordRef = React.createRef();
  // //* loading
  // const [loading, setLoading] = React.useState(false);
  // // ! currentUser
  // const currentUser = useAuth();
  // console.log("currentUser", currentUser);
  // // ! for handle sign up
  // async function handleSignUp() {
  //   // ! it it was empty then we will not sign up
  //   setLoading(true);
  //   try {
  //     await signUp(emailRef.current.value, passwordRef.current.value);
  //   } catch {
  //     alert("Error!");
  //   }
  //   history.push("/");
  //   setLoading(false);
  // }
  // return (
  //   <Container className="bg-white   w-screen center flex-col">
  //     <div className="text-center w-full font-bold text-3xl text-gray-600 p-4">
  //       LOGIN
  //     </div>
  //     <div className="w-full bg-gray-200 my-3 h-0.5"></div>
  //     {/* form section */}
  //     <form>
  //       {/* Email pass container */}
  //       <EmailContainer>
  //         <label className="text-gray-700">Email address</label>
  //         <div className="py-2 flex 🖖🏻  items-center  border border-gray-200 ">
  //           <AtSymbolIcon className="h-4 w-4 ml-2 mr-1   text-gray-600" />
  //           <input
  //             placeholder="Email address"
  //             className=" m1-2  w-full outline-none"
  //             type="email"
  //             ref={emailRef}
  //           />
  //         </div>
  //       </EmailContainer>
  //       {/* Password container */}
  //       <PasswordContainer>
  //         <label className="text-gray-700">Password</label>
  //         <div className="py-2 flex 🖖🏻  items-center  border border-gray-200  ">
  //           <LockClosedIcon className="h-4 w-4 ml-2 mr-1 text-gray-600" />
  //           <input
  //             placeholder="Password"
  //             className=" m1-2 w-full outline-none"
  //             type="password"
  //             ref={passwordRef}
  //           />
  //         </div>
  //       </PasswordContainer>
  //       {/* sigin and sign up button */}
  //       <div class="w-full mt-2 flex flex-row gap-2">
  //         {/* Login */}
  //         <div className="border cursor-pointer border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 center flex-row  gap-1">
  //           <LoginIcon className="h-4 w-4 ml-2 mr-1" />
  //           <button class="" type="submit">
  //             Login
  //           </button>
  //         </div>
  //         {/* sign up */}
  //         <div
  //           disabled={loading || currentUser}
  //           onClick={handleSignUp}
  //           className="signup "
  //         >
  //           <PencilAltIcon className="h-4 w-4 ml-2 mr-1" />
  //           <span>sign up</span>
  //         </div>
  //       </div>
  //       <div class="my-2 flex flex-row justify-center">
  //         <span class="absolute bg-white px-4">or</span>
  //         <div class="w-full bg-gray-200 line mt-3"></div>
  //       </div>
  //       {/* social media */}
  //       <div className="flex flex-col mt-4">
  //         <div
  //           onClick={signInWithGoogle}
  //           class="bg-blue-500 cursor-pointer text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-blue-600 duration-100 ease-in-out "
  //         >
  //           {/* google */}
  //           <FaGoogle className="mr-1 " size={20} />
  //           Sign-in with Google
  //         </div>
  //       </div>
  //     </form>
  //   </Container>
  // );
};

export default SignIn;
const Container = styled.div`
  .🖖🏻 {
    width: 350px;
  }
  .line {
    height: 1px;
  }
  @media (max-width: 768px) {
    .🖖🏻 {
      width: 300px;
    }
  }
`;
const EmailContainer = styled.div``;
const PasswordContainer = styled.div``;
