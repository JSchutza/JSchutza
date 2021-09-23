from flask import Blueprint, request
from app.models import db, Education
from flask_login import login_required
from datetime import datetime
from app.forms import UpdateEducationForm




educations_routes = Blueprint('educations', __name__)


@educations_routes.route('/')
def get_homepage():
  educations = Education.query.order_by(Education.start_year).all()

  if len(educations) == 0:
    return { 'educations': None }

  normalized_data = { each_education.id: each_education.to_dict()  for each_education in educations }
  return { 'educations': normalized_data }






# POST   /api/educations
@educations_routes.route('', methods=['POST'])
@login_required
def create_new_education():
  form = UpdateEducationForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  no_errors = True

  title = form.data['title']
  instution_name = form.data['instution_name']
  start_year = form.data['start_year']
  end_year = form.data['end_year']


  if title == '' or instution_name == '' or start_year == '' or end_year == '':
    no_errors = False
    title = 'default education title'
    instution_name = 'default instution_name'
    start_year = datetime.now()
    end_year = datetime.now()

    if form.validate_on_submit():
      new_education = Education(
        title=title,
        instution_name=instution_name,
        start_year=start_year,
        end_year=end_year
      )
      db.session.add(new_education)
      db.session.commit()

      return { new_education.id: new_education.to_dict() }


  if form.validate_on_submit() and no_errors:
    new_education = Education(
      title=form.data['title'],
      instution_name=form.data['instution_name'],
      start_year=datetime(int(form.data['start_year']), 8, 25,0,0,0,0),    # 08/25/start_year 00:00:00
      end_year=datetime(int(form.data['end_year']), 4,28,0,0,0,0)          # 04/28/end_year 00:00:00
    )
    db.session.add(new_education)
    db.session.commit()

    return { new_education.id: new_education.to_dict() }


  return {"errors": ["errors", "Please try again."]}







# DELETE /api/educations/:education_id
@educations_routes.route('/<int:education_id>', methods=['DELETE'])
@login_required
def delete_education(education_id):
  the_education = Education.query.get(education_id)

  if the_education is not None:
    db.session.delete(the_education)
    db.session.commit()
    return { "message": "education successfully deleted" }

  return { "errors": ["Error, cannot remove requested education.", "Please try again."] }






# PUT /api/educations/:education_id
@educations_routes.route('/<int:education_id>', methods=['PUT'])
@login_required
def update_single_education(education_id):
  form = UpdateEducationForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  no_errors = True

  title = form.data['title']
  instution_name = form.data['instution_name']
  start_year = form.data['start_year']
  end_year = form.data['end_year']

  if title == '' or instution_name == '' or start_year == '' or end_year == '':
    no_errors = False
    title = 'default education title'
    instution_name = 'default instution_name'
    start_year = datetime.now()
    end_year = datetime.now()

    if form.validate_on_submit():
      the_education = Education.query.get(education_id)
      the_education.update_education(
        title,
        instution_name,
        start_year,
        end_year
      )
      db.session.add(the_education)
      db.session.commit()

      return { the_education.id: the_education.to_dict() }


  if form.validate_on_submit() and no_errors:
    the_education = Education.query.get(education_id)
    the_education.update_education(
        form.data['title'],
        form.data['instution_name'],
        datetime(int(form.data['start_year']), 8, 25, 0, 0, 0, 0),              # 08/25/start_year 00:00:00
        datetime(int(form.data['end_year']), 4, 28, 0, 0, 0, 0)                 # 04/28/end_year 00:00:00
    )
    db.session.add(the_education)
    db.session.commit()
    return { the_education.id: the_education.to_dict() }

  return { "errors": ["errors", "Please try again."] }
