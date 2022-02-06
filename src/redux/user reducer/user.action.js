export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER", // ! we are setting the type of action
    payload: user, //! update out payload
  };
};
// 