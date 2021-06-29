from flask import Blueprint
from app.models import Experience


experience_routes = Blueprint('experiences', __name__)


@experience_routes.route('/')
def get_homepage():
  experiences = Experience.query.order_by(Experience.start_date).all()
  normalized_data = {  each_experience.id: each_experience.to_dict()     for each_experience in experiences  }
  return { 'experiences': normalized_data }
