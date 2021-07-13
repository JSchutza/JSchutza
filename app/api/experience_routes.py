from flask import Blueprint, request
from app.models import db, Experience
from flask_login import login_required
from app.forms import UpdateExperienceForm


experience_routes = Blueprint('experiences', __name__)


@experience_routes.route('/')
def get_homepage():
  experiences = Experience.query.order_by(Experience.start_date).all()
  normalized_data = {  each_experience.id: each_experience.to_dict()     for each_experience in experiences  }
  return { 'experiences': normalized_data }






# POST   /api/experiences
@experience_routes.route('', methods=['POST'])
@login_required
def create_new_experience():
  form = UpdateExperienceForm()
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

      return {new_education.id: new_education.to_dict()}

  if form.validate_on_submit() and no_errors:
    new_education = Education(
        title=form.data['title'],
        instution_name=form.data['instution_name'],
        # 08/25/start_year 00:00:00
        start_year=datetime(int(form.data['start_year']), 8, 25, 0, 0, 0, 0),
        # 04/28/end_year 00:00:00
        end_year=datetime(int(form.data['end_year']), 4, 28, 0, 0, 0, 0)
    )
    db.session.add(new_education)
    db.session.commit()

    return {new_education.id: new_education.to_dict()}

  return {"errors": ["errors", "Please try again."]}






# DELETE /api/experiences/:experience_id
# @experience_routes.route('/<int:experience_id>', methods=['DELETE'])
# @login_required
# def delete_education(experience_id):
#   the_education = Education.query.get(education_id)

#   if the_education is not None:
#     db.session.delete(the_education)
#     db.session.commit()
#     return {"message": "education successfully deleted"}

#   return {"errors": ["Error, cannot remove requested education.", "Please try again."]}





# # PUT /api/experiences/:experience_id
# @experience_routes.route('/<int:experience_id>', methods=['PUT'])
# @login_required
# def update_single_education(experience_id):
#   form = UpdateEducationForm()
#   form['csrf_token'].data = request.cookies['csrf_token']

#   no_errors = True

#   title = form.data['title']
#   instution_name = form.data['instution_name']
#   start_year = form.data['start_year']
#   end_year = form.data['end_year']

#   if title == '' or instution_name == '' or start_year == '' or end_year == '':
#     no_errors = False
#     title = 'default education title'
#     instution_name = 'default instution_name'
#     start_year = datetime.now()
#     end_year = datetime.now()

#     if form.validate_on_submit():
#       the_education = Education.query.get(education_id)
#       the_education.update_education(
#           title,
#           instution_name,
#           start_year,
#           end_year
#       )
#       db.session.add(the_education)
#       db.session.commit()

#       return {the_education.id: the_education.to_dict()}

#   if form.validate_on_submit() and no_errors:
#     the_education = Education.query.get(education_id)
#     the_education.update_education(
#         form.data['title'],
#         form.data['instution_name'],
#         # 08/25/start_year 00:00:00
#         datetime(int(form.data['start_year']), 8, 25, 0, 0, 0, 0),
#         # 04/28/end_year 00:00:00
#         datetime(int(form.data['end_year']), 4, 28, 0, 0, 0, 0)
#     )
#     db.session.add(the_education)
#     db.session.commit()
#     return {the_education.id: the_education.to_dict()}

#   return {"errors": ["errors", "Please try again."]}
