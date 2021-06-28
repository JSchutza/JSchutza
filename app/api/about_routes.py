from flask import Blueprint
from app.models import User






about_routes = Blueprint('about', __name__)


@about_routes.route('/')
def get_homepage():
  return { 'message': "sucess" }
