import { CREATE_USER, GET_MEMBER, GET_USER, SET_EMAIL_PASSWORD_WRONG, SET_ERROR, SET_LOADING, SET_SUCCESS_REGISTER } from "../keys";

const initialState = {
  users: [],
  members: [], 
  isError: null,
  isLoading: null,
  wrongEmailPassword: false,
  successRegister: false,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return { ...state, users: payload };
    case SET_ERROR:
      return { ...state, isError: payload };
    case SET_LOADING:
      return { ...state, isLoading: payload };
    case GET_MEMBER:
      return { ...state, members: payload};
    case SET_EMAIL_PASSWORD_WRONG:
      return { ...state, wrongEmailPassword: payload};
    case SET_SUCCESS_REGISTER:
      return { ...state, successRegister: payload};
    case CREATE_USER:
      let newUsers = state.users.map(el => el);
      newUsers.unshift(payload);
      return { ...state, users: newUsers };
    default:
      return state;
  }
}