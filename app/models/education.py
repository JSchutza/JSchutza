from .db import db
from datetime import datetime








class Education(db.Model):
  __tablename__ = "educations"

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.Text)
  instution_name = db.Column(db.Text)
  start_year = db.Column(db.DateTime, nullable=False, default=datetime.now)
  end_year = db.Column(db.DateTime, nullable=False, default=datetime.now)




  def update_education(self, new_title, new_instution_name, new_start_year, new_end_year):
    self.title = new_title
    self.instution_name = new_instution_name
    self.start_year = new_start_year
    self.end_year = new_end_year






  def to_dict(self):
    return {
        "id": self.id,
        "title": self.title,
        "instution_name": self.instution_name,
        "start_year": self.start_year,
        "end_year": self.end_year,
    }
