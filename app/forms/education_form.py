

from flask_wtf import FlaskForm
from wtforms import StringField, DateField





class UpdateEducationForm(FlaskForm):
  title = StringField("text")
  instution_name = StringField("text")
  start_year = StringField("text")
  end_year = StringField("text")
