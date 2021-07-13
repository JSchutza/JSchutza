from flask import Blueprint
from app.models import db, Education
from flask_login import login_required
from app.forms import UpdateEducationForm




educations_routes = Blueprint('educations', __name__)


@educations_routes.route('/')
def get_homepage():
  educations = Education.query.order_by(Education.start_year).all()
  normalized_data = { each_education.id: each_education.to_dict()  for each_education in educations }
  return { 'educations': normalized_data }






# POST   /api/educations
@educations_routes.route('', methods=['POST'])
@login_required
def create_new_education():
  pass
