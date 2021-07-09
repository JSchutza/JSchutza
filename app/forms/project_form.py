

from flask_wtf import FlaskForm
from wtforms import StringField



class UpdateProjectForm(FlaskForm):
  project_name = StringField("text")
  img = StringField("text")
  description = StringField("text")
  live_link = StringField("text")
  github_link = StringField("text")
  used_tech = StringField("text")
