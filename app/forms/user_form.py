

from flask_wtf import FlaskForm
from wtforms import StringField


class UpdateUserForm(FlaskForm):
  firstname = StringField("text")
  lastname = StringField("text")
  jobtitle = StringField("text")
  about_text = StringField("text")
  github_link = StringField("text")
  linkedin_link = StringField("text")
