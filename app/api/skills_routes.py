from flask import Blueprint, request
from app.models import Skill
from flask_login import login_required, current_user
from app.forms import UpdateSkillForm



skills_routes = Blueprint('skills', __name__)


@skills_routes.route('/')
def get_homepage():
  skills = Skill.query.order_by(Skill.percentage).all()
  normalized_data = { each_skill.id : each_skill.to_dict()  for each_skill in skills  }
  return { 'skills': normalized_data }






# POST   /api/skills
@skills_routes.route('', methods=['POST'])
@login_required
def create_new_skill():
  form = UpdateSkillForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  # no_errors = True

  # first = form.data['firstname']
  # last = form.data['lastname']
  # title = form.data['jobtitle']
  # about = form.data['about_text']
  # git_link = form.data['github_link']
  # link_link = form.data['linkedin_link']

  # if first == '' or last == '' or title == '' or about == '' or git_link == '' or link_link == '':
  #   no_errors = False
  #   first = 'Joshua'
  #   last = 'Schutza'
  #   title = 'Software Engineer'
  #   about = 'Leader, Visionary, Advocate.'
  #   git_link = 'https://github.com/JSchutza'
  #   link_link = 'https://www.linkedin.com/in/joshua-schutza-559819ba/'

  #   if form.validate_on_submit():
  #     current_user.update_aboutme(
  #         first, last, title, about, git_link, link_link)
  #     db.session.add(current_user)
  #     db.session.commit()

  #     return {"user": current_user.to_dict()}

  # if form.validate_on_submit() and no_errors:
  #   current_user.update_aboutme(
  #       form.data['firstname'],
  #       form.data['lastname'],
  #       form.data['jobtitle'],
  #       form.data['about_text'],
  #       form.data['github_link'],
  #       form.data['linkedin_link']
  #   )
  #   db.session.add(current_user)
  #   db.session.commit()

  #   return {"user": current_user.to_dict()}

  return {"errors": ["errors", "Please try again."]}
