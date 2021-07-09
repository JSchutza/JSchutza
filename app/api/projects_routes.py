from flask import Blueprint
from app.models import db, Project
from flask_login import login_required
from app.forms import UpdateProjectForm



project_routes = Blueprint('projects', __name__)


@project_routes.route('/')
def get_homepage():
  projects = Project.query.order_by(Project.id).all()
  normalized_data = { each_project.id: each_project.to_dict()  for each_project in projects }
  return { 'projects': normalized_data }





# POST /api/projects
@project_routes.route('', methods=['POST'])
@login_required
def create_project():
  form = UpdateProjectForm()

  