import {
  GET_USER,
  SET_LOADING,
  SET_ERROR,
  GET_MEMBER,
  SET_EMAIL_PASSWORD_WRONG,
  CREATE_USER,
  SET_SUCCESS_REGISTER,
  SET_USER_INFO,
  SET_SUCCESS_CREATE_MEMBER,
  CREATE_MEMBER,
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

export function setSuccessCreateMember(payload) {
  return {
    type: SET_SUCCESS_CREATE_MEMBER,
    payload,
  };
}

export function createNewMember(payload) {
  return {
    type: CREATE_MEMBER,
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

export function createNewMemberHandler(payload) {
  return async function (dispatch) {
    dispatch(setSuccessCreateMember(true))
    dispatch(createNewMember(payload))
    setTimeout(() => {
      dispatch(setSuccessCreateMember(false))
    }, 2000);
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

export function fetchMembers() {
  return async function (dispatch) {
    const allmembers = [
      {
        id: 1,
        name: "Daniel Dewa",
        position: "Staff IT",
        reportsTo: "Ilham",
        pictureUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 2,
        name: "Yanti Permata",
        position: "Staff Finance",
        reportsTo: "Rudy",
        pictureUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      },
      {
        id: 3,
        name: "Christian",
        position: "Staff HR",
        reportsTo: "Wijaya",
        pictureUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 4,
        name: "Samuel Utama",
        position: "Staff IT",
        reportsTo: "Ilham",
        pictureUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 5,
        name: "Intan",
        position: "Staff HR",
        reportsTo: "Wijaya",
        pictureUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      },
      {
        id: 6,
        name: "Bellina",
        position: "Staff Finance",
        reportsTo: "Rudy",
        pictureUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      },
      {
        id: 7,
        name: "Farandy",
        position: "Staff IT",
        reportsTo: "Ilham",
        pictureUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 8,
        name: "Imanuel",
        position: "Staff HR",
        reportsTo: "Wijaya",
        pictureUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 9,
        name: "Putri Delima",
        position: "Staff Finance",
        reportsTo: "Rudy",
        pictureUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      },
      {
        id: 10,
        name: "Ajeng Ayu",
        position: "Staff HR",
        reportsTo: "Wijaya",
        pictureUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      },
      {
        id: 11,
        name: "Vijay",
        position: "Staff IT",
        reportsTo: "Ilham",
        pictureUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 12,
        name: "Rizky",
        position: "Staff Finance",
        reportsTo: "Rudy",
        pictureUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
    ]
    const membersSorting = allmembers.sort((a, b) => b.id - a.id);
    dispatch(getMembers(membersSorting))
  };
}
