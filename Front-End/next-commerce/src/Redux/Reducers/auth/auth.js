import auth_types from "./types";

const intialState = {
  id: 0,
  username: "",
  email: "",
  password: 0,
  full_name: "",
};

const authReducer = (state = intialState, action) => {
  if (action.type === auth_types.USER_LOGIN) {
    return {
      ...state,
      id: action.payload.id,
      username: action.payload.username,
      email: action.payload.email,
      password: action.payload.password,
      full_name: action.payload.full_name,
    };
  } else if (action.type === auth_types.USER_LOGOUT) {
    return intialState;
  }
  return state;
};

export default authReducer;
