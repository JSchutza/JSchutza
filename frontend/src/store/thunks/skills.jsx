

import { getSkills, createSkills, deleteSkill, updateSkill } from "../actions/skills.jsx";




const thunk_getSkills = () => async (dispatch) => {
  const response = await fetch("/api/skills/", {
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





const thunk_createSkills = ({ title, percentage, img }) => async (dispatch) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("percentage", percentage);
  formData.append("img", img);



  const response = await fetch("/api/skills", {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(createSkills(data));
}



const thunk_deleteSkill = (skillId) => async (dispatch) => {
  const response = await fetch(`/api/skills/${skillId}`, {
    method: "DELETE",
    credentials: "include",
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(deleteSkill(skillId));
  dispatch(thunk_getSkills());

}




const thunk_updateSkill = (skillId, { title, percentage, img }) => async (dispatch) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("percentage", percentage);
  formData.append("img", img);


  const response = await fetch(`/api/skills/${skillId}`, {
    method: 'PUT',
    body: formData,
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(updateSkill(data));
}






export {
  thunk_getSkills,
  thunk_createSkills,
  thunk_deleteSkill,
  thunk_updateSkill,

}
