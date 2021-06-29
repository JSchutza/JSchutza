

import { getProjects } from "../actions/projects.js";




const thunk_getProjects = () => async (dispatch) => {
  const response = await fetch("/api/projects", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(getProjects(data));
}



export {
  thunk_getProjects,

}
