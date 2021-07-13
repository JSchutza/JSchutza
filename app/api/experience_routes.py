from flask import Blueprint, request
from app.models import db, Experience
from flask_login import login_required
from datetime import datetime
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
  company_name = form.data['company_name']
  start_date = form.data['start_date']
  end_date = form.data['end_date']

  if title == '' or company_name == '' or start_date == '' or end_date == '':
    no_errors = False
    title = 'default experience title'
    company_name = 'default company_name'
    start_date = datetime.now()
    end_date = datetime.now()

    if form.validate_on_submit():
      new_experience = Experience(
          title=title,
          company_name=company_name,
          start_date=start_date,
          end_date=end_date
      )
      db.session.add(new_experience)
      db.session.commit()

      return { new_experience.id: new_experience.to_dict() }

  if form.validate_on_submit() and no_errors:
    new_experience = Experience(
      title=form.data['title'],
      company_name=form.data['company_name'],
      start_date=datetime(int(form.data['start_date']), 8, 25, 0, 0, 0, 0),
      end_date=datetime(int(form.data['end_date']), 4, 28, 0, 0, 0, 0)
    )
    db.session.add(new_experience)
    db.session.commit()

    return { new_experience.id: new_experience.to_dict() }

  return { "errors": ["errors", "Please try again."] }






# DELETE /api/experiences/:experience_id
@experience_routes.route('/<int:experience_id>', methods=['DELETE'])
@login_required
def delete_experience(experience_id):
  the_experience = Experience.query.get(experience_id)

  if the_experience is not None:
    db.session.delete(the_experience)
    db.session.commit()
    return { "message": "experience successfully deleted" }

  return { "errors": ["Error, cannot remove requested experience.", "Please try again."] }





# PUT /api/experiences/:experience_id
@experience_routes.route('/<int:experience_id>', methods=['PUT'])
@login_required
def update_single_experience(experience_id):
  form = UpdateExperienceForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  no_errors = True


  title = form.data['title']
  company_name = form.data['company_name']
  start_date = form.data['start_date']
  end_date = form.data['end_date']

  if title == '' or company_name == '' or start_date == '' or end_date == '':
    no_errors = False
    title = 'default experience title'
    company_name = 'default company_name'
    start_date = datetime.now()
    end_date = datetime.now()


    if form.validate_on_submit():
      the_experience = Experience.query.get(experience_id)
      the_experience.update_experience(title, company_name, start_date, end_date)
      db.session.add(the_experience)
      db.session.commit()

      return { the_experience.id: the_experience.to_dict() }


  if form.validate_on_submit() and no_errors:
    the_experience = Experience.query.get(experience_id)
    the_experience.update_experience(
        form.data['title'],
        form.data['company_name'],
        datetime(int(form.data['start_date']), 8, 25, 0, 0, 0, 0),
        datetime(int(form.data['end_date']), 4, 28, 0, 0, 0, 0)
    )
    db.session.add(the_experience)
    db.session.commit()
    return { the_experience.id: the_experience.to_dict() }

  return { "errors": ["errors", "Please try again."] }
