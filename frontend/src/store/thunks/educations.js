

import { getEducations } from "../actions/educations.js";




const thunk_getEducations = () => async (dispatch) => {
  const response = await fetch("/api/educations", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(getEducations(data));
}



export {
  thunk_getEducations,

}
