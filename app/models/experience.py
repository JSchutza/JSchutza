from .db import db
from datetime import datetime


class Experience(db.Model):
  __tablename__ = "experiences"

  id = db.Column(db.Integer, primary_key=True)
  bulletpoint_id = db.Column(db.Integer, db.ForeignKey("bulletpoints.id", ondelete='CASCADE'), nullable=True)
  title = db.Column(db.Text)
  company_name = db.Column(db.Text)
  start_date = db.Column(db.DateTime, nullable=False, default=datetime.now)
  end_date = db.Column(db.DateTime, nullable=False, default=datetime.now)




  def to_dict(self):
    return {
        "id": self.id,
        "bulletpoint_id": self.bulletpoint_id,
        "title": self.title,
        "company_name": self.company_name,
        "start_date": self.start_date,
        "end_date": self.end_date,
    }
