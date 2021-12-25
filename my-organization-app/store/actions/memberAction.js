import {
  GET_USER,
  SET_LOADING,
  SET_ERROR,
  GET_MEMBER,
  SET_EMAIL_PASSWORD_WRONG,
  CREATE_USER,
  SET_SUCCESS_REGISTER,
  SET_USER_INFO,
} from "../keys";

export function getUsers(payload) {
  return {
    type: GET_USER,
    payload,
  };
}

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload,
  };
}

export function getMembers(payload) {
  return {
    type: GET_MEMBER,
    payload,
  };
}

export function setEmailPasswordWrong(payload) {
  return {
    type: SET_EMAIL_PASSWORD_WRONG,
    payload,
  };
}

export function setSuccessRegister(payload) {
  return {
    type: SET_SUCCESS_REGISTER,
    payload,
  };
}

export function createUserToReducer(payload) {
  return {
    type: CREATE_USER,
    payload,
  };
}

export function setUserInfo(payload) {
  return {
    type: SET_USER_INFO,
    payload,
  };
}

export function fetchUsers() {
  return async function (dispatch) {
    const allusers = [
      {
        email: 'ifan@mail.com',
        password: '123456'
      }
    ]
    dispatch(getUsers(allusers))
  };
}

export function setEmailPasswordWrongHandler(payload) {
  return async function (dispatch) {
    dispatch(setEmailPasswordWrong(payload))
  };
}

export function setSuccessRegisterHandler(payload) {
  return async function (dispatch) {
    dispatch(setSuccessRegister(payload))
  };
}

export function createNewUser(payload) {
  return async function (dispatch) {
    dispatch(createUserToReducer(payload))
  };
}
