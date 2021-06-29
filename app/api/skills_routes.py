from flask import Blueprint
from app.models import Experience


skills_routes = Blueprint('skills', __name__)


@skills_routes.route('/')
def get_homepage():
  skills = Experience.query.order_by(Experience.percentage).all()
  normalized_data = { each_skill.id : each_skill.to_dict()  for each_skill in skills  }
  return { 'skills': normalized_data }
