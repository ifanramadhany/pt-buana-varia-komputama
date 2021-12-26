import { CREATE_USER, CREATE_MEMBER, GET_MEMBER, GET_USER, SET_USER_INFO, SET_EMAIL_PASSWORD_WRONG, SET_ERROR, SET_LOADING, SET_SUCCESS_REGISTER, SET_SUCCESS_CREATE_MEMBER } from "../keys";

const initialState = {
  users: [],
  userInfo: '',
  members: [], 
  isError: null,
  isLoading: null,
  wrongEmailPassword: false,
  successRegister: false,
  successCreateMember: false,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return { ...state, users: payload };
    case SET_USER_INFO:
      return { ...state, userInfo: payload };
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
    case SET_SUCCESS_CREATE_MEMBER:
      return { ...state, successCreateMember: payload};
    case CREATE_USER:
      let newUsers = state.users.map(el => el);
      newUsers.unshift(payload);
      return { ...state, users: newUsers };
    case CREATE_MEMBER:
      let newMembers = state.members.map(el => el);
      newMembers.unshift(payload);
      return { ...state, members: newMembers };
    default:
      return state;
  }
}