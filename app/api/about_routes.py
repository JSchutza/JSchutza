from flask import Blueprint
from app.models import User
from flask_login import login_required, current_user



about_routes = Blueprint('about', __name__)





# GET  /api/about
@about_routes.route('/')
def get_homepage():
  personal_instance = User.query.get(1)
  return personal_instance.to_dict()






# PUT   /api/about
@about_routes.route('/', methods=['PUT'])
@login_required
def update_aboutme_info():
  # current_user.
  pass
