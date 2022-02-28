// ! reducer is just a function that gets a two arguments
// ! state and action
// ! state is the current state of the application
// ! action is an object that contains the type of action
// ! and the payload

import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

// ! if ever  state is undefined we will set it to initial state as default
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //! sign in and sign up success
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_UP_SUCCESS:
      return { ...state, currentUser: action.payload };
    //! sign in and sign up failure
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return { ...state, error: action.payload };

    //! sign out success
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, error: null };
    //! if none of the type is match then return default state

    default:
      return state;
  }
};
export default userReducer;
