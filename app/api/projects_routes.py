from flask import Blueprint
from app.models import Project


project_routes = Blueprint('projects', __name__)


@project_routes.route('/')
def get_homepage():
  projects = Project.query.order_by(Project.id).all()
  normalized_data = { each_project.id: each_project.to_dict()  for each_project in projects }
  return { 'projects': normalized_data }
