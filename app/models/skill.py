from .db import db






class Skill(db.Model):
  __tablename__ = "skills"

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.Text)
  percentage = db.Column(db.Float)
  img = db.Column(db.Text)



  def update_skill(self, new_title, new_percentage, new_img):
    self.title = new_title
    self.percentage = new_percentage
    self.img = new_img




  def to_dict(self):
    return {
        "id": self.id,
        "title": self.title,
        "percentage": self.percentage,
        "img": self.img,
    }
