from flask import Blueprint, request
from app.models import User
from flask_login import login_required, current_user
from app.forms import UpdateUserForm


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
  # current_user.update_aboutme(new_firstname, new_lastname, new_jobtitle, new_abouttext, new_github_link, new_linkedin_link)
  form = UpdateUserForm()
  form['csrf_token'].data = request.cookies['csrf_token']


  if form.validate_on_submit():
    current_user.update_aboutme(
        form.data['firstname'],
        form.data['lastname'],
        form.data['jobtitle'],
        form.data['about_text'],
        form.data['github_link'],
        form.data['linkedin_link']
    )

  return { "errors": ["errors", "Please try again."] }
