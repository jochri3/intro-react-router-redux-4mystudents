//Reducers
const INITIAL_STATE = {
  users: [],
  user: {}
};
const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, users: action.payload };
    case "FETCH_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
