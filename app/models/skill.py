from .db import db






class Skill(db.Model):
  __tablename__ = "skills"

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.Text)
  percentage = db.Column(db.Float)



  def update_skill(self, new_title, new_percentage):
    self.title = new_title
    self.percentage = new_percentage




  def to_dict(self):
    return {
        "id": self.id,
        "title": self.title,
        "percentage": self.percentage,
    }
