// ! reducer is just a function that gets a two arguments
// ! state and action
// ! state is the current state of the application
// ! action is an object that contains the type of action
// ! and the payload

const INITIAL_STATE = {
  currentUser: null,
};

// ! if ever  state is undefined we will set it to initial state as default
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.payload };
    //! if none of the type is match then return default state
    default:
      return state;
  }
};
export default userReducer;
