

import { getExperiences } from "../actions/skills.js";




const thunk_getExperiences = () => async (dispatch) => {
  const response = await fetch("/api/experiences", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(getExperiences(data));
}



export {
  thunk_getExperiences,

}
