from flask import Blueprint
from app.models import User



about_routes = Blueprint('about', __name__)





@about_routes.route('/')
def get_homepage():
  personal_instance = User.query.get(1)
  return personal_instance.to_dict()
