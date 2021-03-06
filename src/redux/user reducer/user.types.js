const UserActionTypes = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  // ! for starting
  GOOGLE_SIGN_IN_USER_START: "GOOGLE_SIGN_IN_USER_START",
  EMAIL_SIGN_IN_START: "EMAIL_SIGN_IN_START",
  //! for success and failure
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE: "EMAIL_SIGN_IN_FAILURE",

  //!sign out
  SIGN_OUT_START: "SIGN_OUT_START",
  SIGN_OUT_SUCCESS: "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILURE: "SIGN_OUT_FAILURE",

  // ! for user sign out
  SIGN_UP_START: "SIGN_UP_START",
  SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
  SIGN_UP_FAILURE: "SIGN_UP_FAILURE",
};

export default UserActionTypes;
