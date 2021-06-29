from flask import Blueprint
from app.models import Skill


skills_routes = Blueprint('skills', __name__)


@skills_routes.route('/')
def get_homepage():
  skills = Skill.query.order_by(Skill.percentage).all()
  normalized_data = { each_skill.id : each_skill.to_dict()  for each_skill in skills  }
  return { 'skills': normalized_data }
