from flask import Blueprint, request
from app.models import db, Project
from flask_login import login_required
from app.forms import UpdateProjectForm



project_routes = Blueprint('projects', __name__)


@project_routes.route('/')
def get_homepage():
  projects = Project.query.order_by(Project.id).all()

  if len(projects) == 0:
    return { 'projects': None }

  normalized_data = { each_project.id: each_project.to_dict()  for each_project in projects }
  return { 'projects': normalized_data }





# POST /api/projects
@project_routes.route('', methods=['POST'])
@login_required
def create_project():
  form = UpdateProjectForm()


  form['csrf_token'].data = request.cookies['csrf_token']
  no_errors = True

  project_name = form.data['project_name']
  project_img = form.data['project_img']
  description = form.data['description']
  live_link = form.data['live_link']
  github_link = form.data['github_link']
  used_tech = form.data['used_tech']
  defaultImg = 'https://joshuaschutzapersonal.s3.amazonaws.com/default_project_img.JPG'

  if project_name == '' or project_img == '' or description == '' or live_link == '' or github_link == '' or used_tech == '':
    no_errors = False
    project_name = 'default project name'
    project_img = defaultImg
    description = 'default project description'
    live_link = 'default project live_link'
    github_link = 'default project github_link'
    used_tech = 'default project used_tech'


    if form.validate_on_submit():
      new_project = Project(
        project_name=project_name,
        project_img=project_img,
        description=description,
        live_link=live_link,
        github_link=github_link,
        used_tech=used_tech
      )

      db.session.add(new_project)
      db.session.commit()

      return { new_project.id: new_project.to_dict() }


  if form.validate_on_submit() and no_errors:
    new_project = Project(
        project_name=form.data['project_name'],
        project_img=form.data['project_img'],
        description=form.data['description'],
        live_link=form.data['live_link'],
        github_link=form.data['github_link'],
        used_tech=form.data['used_tech']
    )

    db.session.add(new_project)
    db.session.commit()

    return { new_project.id: new_project.to_dict() }

  return { "errors": ["errors", "Please try again."] }






# DELETE /api/projects/:project_id
@project_routes.route('/<int:project_id>', methods=['DELETE'])
@login_required
def delete_project(project_id):
  the_project = Project.query.get(project_id)

  if the_project is not None:
    db.session.delete(the_project)
    db.session.commit()
    return { "message": "project successfully deleted" }

  return { "errors": ["Error, cannot remove requested skill.", "Please try again."] }







# PUT /api/projects/:project_id
@project_routes.route('/<int:project_id>', methods=['PUT'])
@login_required
def update_single_project(project_id):
  form = UpdateProjectForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  no_errors = True

  project_name = form.data['project_name']
  project_img = form.data['project_img']
  description = form.data['description']
  live_link = form.data['live_link']
  github_link = form.data['github_link']
  used_tech = form.data['used_tech']
  defaultImg = 'https://joshuaschutzapersonal.s3.amazonaws.com/default_project_img.JPG'

  if project_name == '' or project_img == '' or description == '' or live_link == '' or github_link == '' or used_tech == '':
    no_errors = False
    project_name = 'default project name'
    project_img = defaultImg
    description = 'default project description'
    live_link = 'default project live_link'
    github_link = 'default project github_link'
    used_tech = 'default project used_tech'

    if form.validate_on_submit():
      the_project = Project.query.get(project_id)
      the_project.update_project(
          project_name,
          project_img,
          description,
          live_link,
          github_link,
          used_tech
      )
      db.session.add(the_project)
      db.session.commit()

      return { the_project.id: the_project.to_dict() }



  if form.validate_on_submit() and no_errors:
    the_project = Project.query.get(project_id)
    the_project.update_project(
      form.data['project_name'],
      form.data['project_img'],
      form.data['description'],
      form.data['live_link'],
      form.data['github_link'],
      form.data['used_tech']
    )

    db.session.add(the_project)
    db.session.commit()

    return { the_project.id: the_project.to_dict() }

  return { "errors": ["errors", "Please try again."] }
