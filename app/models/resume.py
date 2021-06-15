from .db import db
from .user import User




class Resume(db.Model):
  __tablename__ = "resumes"

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete='CASCADE'), nullable=False)
  skill_id = db.Column(db.Integer, db.ForeignKey("skills.id", ondelete='CASCADE'), nullable=False)
  project_id = db.Column(db.Integer, db.ForeignKey("projects.id", ondelete='CASCADE'), nullable=False)
  experience_id = db.Column(db.Integer, db.ForeignKey("experiences.id", ondelete='CASCADE'), nullable=False)
  education_id = db.Column(db.Integer, db.ForeignKey("educations.id", ondelete='CASCADE'), nullable=False)






  def to_dict(self):
    return {
        "id": self.id,
        "user_id": self.user_id,
        "skill_id": self.skill_id,
        "project_id": self.project_id,
        "experience_id": self.experience_id,
        "education_id": self.education_id,
        "username": User.query.get(self.user_id).user_name,
    }
