from flask import Blueprint, request
from app.models import db, Skill
from flask_login import login_required
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

  no_errors = True

  title = form.data['title']
  percentage = form.data['percentage']


  if title == '' or percentage == '':
    no_errors = False
    title = 'JavaScript'
    percentage = '100'

    if form.validate_on_submit():
      new_skill = Skill(title=title, percentage=float(percentage))
      db.session.add(new_skill)
      db.session.commit()

      return { "skill": new_skill.to_dict() }


  if form.validate_on_submit() and no_errors:
    new_skill = Skill(title=form.data['title'], percentage=float(form.data['percentage']))
    db.session.add(new_skill)
    db.session.commit()

    return { "skill": new_skill.to_dict() }


  return { "errors": ["errors", "Please try again."] }
