

import { getSkills } from "../actions/skills.js";




const thunk_getSkills = () => async (dispatch) => {
  const response = await fetch("/api/skills", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(getSkills(data));
}



export {
  thunk_getSkills,

}
