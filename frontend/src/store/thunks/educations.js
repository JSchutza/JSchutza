

import { getEducations, createEducation, deleteEducation } from "../actions/educations.js";




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







const thunk_createEducation = ({ title, instution_name, start_year, end_year }) => async (dispatch) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("instution_name", instution_name);
  formData.append("start_year", start_year);
  formData.append("end_year", end_year);



  const response = await fetch("/api/educations", {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(createEducation(data));
}




const thunk_deleteEducation = (educationId) => async (dispatch) => {
  const response = await fetch(`/api/educations/${educationId}`, {
    method: "DELETE",
    credentials: "include",
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(deleteEducation(educationId));
  dispatch(thunk_getEducations());

}



export {
  thunk_getEducations,
  thunk_createEducation,
  thunk_deleteEducation,

}
