from .db import db



class Project(db.Model):
  __tablename__ = "projects"

  id = db.Column(db.Integer, primary_key=True)
  project_name = db.Column(db.Text)
  project_img = db.Column(db.Text)
  description = db.Column(db.Text)
  live_link = db.Column(db.Text)
  github_link = db.Column(db.Text)
  used_tech = db.Column(db.Text)
  bulletpoint_id = db.Column(db.Integer, db.ForeignKey("bulletpoints.id", ondelete='CASCADE'), nullable=True)




  def update_project(self, new_name, new_img, new_description, new_live_link, new_github_link, new_used_tech):
    self.project_name = new_name
    self.project_img = new_img
    self.description = new_description
    self.live_link = new_live_link
    self.github_link = new_github_link
    self.used_tech = new_used_tech



  def to_dict(self):
    return {
        "id": self.id,
        "project_name": self.project_name,
        "project_img": self.project_img,
        "description": self.description,
        "live_link": self.live_link,
        "github_link": self.github_link,
        "used_tech": self.used_tech,
        "bulletpoint_id": self.bulletpoint_id,
    }
