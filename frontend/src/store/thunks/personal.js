

import { getPersonalInfo, updatePersonalInfo } from '../actions/personal.js';



const thunk_getPersonalInfo = () => async (dispatch) => {
  const response = await fetch("/api/about", {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(getPersonalInfo(data));
}




const thunk_updatePersonalInfo = ({ firstname, lastname, jobtitle, about_text, github_link, linkedin_link  }) => async (dispatch) => {
  const formData = new FormData();
  formData.append("firstname", firstname);
  formData.append("lastname", lastname);
  formData.append("jobtitle", jobtitle);
  formData.append("about_text", about_text);
  formData.append("github_link", github_link);
  formData.append("linkedin_link", linkedin_link);



  const response = await fetch("/api/about", {
    method: 'PUT',
    body: formData,
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(updatePersonalInfo(data));
}







export {
  thunk_getPersonalInfo,
  thunk_updatePersonalInfo,


}
