

from flask_wtf import FlaskForm
from wtforms import StringField


class UpdateExperienceForm(FlaskForm):
  title = StringField("text")
  company_name = StringField("text")
  start_date = StringField("text")
  end_date = StringField("text")
