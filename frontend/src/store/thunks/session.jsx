import { setUser, removeUser, setErrors } from '../actions/session.jsx';
// import { setErrors as initErrors, resetErrors } from "../actions/errors.jsx";


// thunks
const authenticate = () => async (dispatch) => {
  const response = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }
  dispatch(setUser(data));
};



const login = (email, password) => async (dispatch) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  if (data.errors) {
    dispatch(setErrors(data.errors));
    return;
  }
  dispatch(setUser(data));
  return {};
};


const logout = () => async (dispatch) => {
  await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  dispatch(removeUser());
};






const resetUser = () => async (dispatch) => {
  const response = await fetch(`/api/users/reset`, { credentials: "include" });
  const data = await response.json();

  dispatch(setUser(data));
};









export {
  authenticate,
  login,
  logout,
  resetUser,



}
