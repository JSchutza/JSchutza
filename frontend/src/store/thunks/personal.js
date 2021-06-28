

import { getPersonalInfo } from '../actions/personal.js';



const thunk_getPersonalInfo = () => async (dispatch) => {
  const response = await fetch("/api/about", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(getPersonalInfo(data));
}




export {
  thunk_getPersonalInfo,

}
