

import { getProjects, createProject, deleteProject, updateProject } from "../actions/projects.js";




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





const thunk_createProject = ({ projectname, projectimg, description, livelink, githublink, usedtechnology }) => async (dispatch) => {
  const formData = new FormData();
  formData.append("projectname", projectname);
  formData.append("projectimg", projectimg);
  formData.append("description", description);
  formData.append("livelink", livelink);
  formData.append("githublink", githublink);
  formData.append("usedtechnology", usedtechnology);


  const response = await fetch("/api/projects", {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(createProject(data));
};



const thunk_deleteProject = (projectId) => async (dispatch) => {
  const response = await fetch(`/api/projects/${projectId}`, {
    method: "DELETE",
    credentials: "include",
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(deleteProject(projectId));
  dispatch(thunk_getProjects());

}




const thunk_updateProject = (projectId, { project_name, project_img, description, live_link, github_link, used_tech }) => async (dispatch) => {
  const formData = new FormData();
  formData.append("project_name", project_name);
  formData.append("project_img", project_img);
  formData.append("description", description);
  formData.append("live_link", live_link);
  formData.append("github_link", github_link);
  formData.append("used_tech", used_tech);


  const response = await fetch(`/api/projects/${projectId}`, {
    method: 'PUT',
    body: formData,
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(updateProject(data));
}






export {
  thunk_getProjects,
  thunk_createProject,
  thunk_deleteProject,
  thunk_updateProject,


}
