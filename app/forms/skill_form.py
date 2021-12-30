

from flask_wtf import FlaskForm
from wtforms import StringField





class UpdateSkillForm(FlaskForm):
  title = StringField("text")
  percentage = StringField("text")
  img = StringField("text")
