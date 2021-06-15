from .db import db


class Bulletpoint(db.Model):
  __tablename__ = "bulletpoints"

  id = db.Column(db.Integer, primary_key=True)
  description = db.Column(db.Text)


  def to_dict(self):
    return {
        "id": self.id,
        "description": self.description,
    }
