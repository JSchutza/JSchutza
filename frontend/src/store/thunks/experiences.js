

import { getExperiences, createExperiences } from "../actions/experiences.js";




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










const thunk_createExperiences = ({ title, company_name, start_date, end_date }) => async (dispatch) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("company_name", company_name);
  formData.append("start_date", start_date);
  formData.append("end_date", end_date);



  const response = await fetch("/api/experiences", {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(createExperiences(data));
}



// const thunk_deleteSkill = (skillId) => async (dispatch) => {
//   const response = await fetch(`/api/skills/${skillId}`, {
//     method: "DELETE",
//     credentials: "include",
//   });

//   const data = await response.json();
//   if (data.errors) {
//     return;
//   }

//   dispatch(deleteSkill(skillId));
//   dispatch(thunk_getSkills());

// }




// const thunk_updateSkill = (skillId, { title, percentage }) => async (dispatch) => {
//   const formData = new FormData();
//   formData.append("title", title);
//   formData.append("percentage", percentage);


//   const response = await fetch(`/api/skills/${skillId}`, {
//     method: 'PUT',
//     body: formData,
//   });

//   const data = await response.json();
//   if (data.errors) {
//     return;
//   }

//   dispatch(updateSkill(data));
// }



export {
  thunk_getExperiences,
  thunk_createExperiences,

}
