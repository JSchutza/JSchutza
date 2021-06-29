from .db import db






class Experience(db.Model):
  __tablename__ = "skills"

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.Text)
  percentage = db.Column(db.Float)







  def to_dict(self):
    return {
        "id": self.id,
        "title": self.title,
        "percentage": self.percentage,
    }
