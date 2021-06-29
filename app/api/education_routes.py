from flask import Blueprint
from app.models import Education


educations_routes = Blueprint('educations', __name__)


@educations_routes.route('/')
def get_homepage():
  educations = Education.query.order_by(Education.start_year).all()
  normalized_data = { each_education.id: each_education.to_dict()  for each_education in educations }
  return { 'educations': normalized_data }
