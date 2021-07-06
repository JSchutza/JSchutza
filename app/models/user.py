from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin







class User(db.Model, UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    avatar = db.Column(db.Text)
    firstname = db.Column(db.String(255), nullable=False)
    lastname = db.Column(db.String(255), nullable=False)
    jobtitle = db.Column(db.Text)
    about_text = db.Column(db.Text)
    github_link = db.Column(db.Text)
    linkedin_link = db.Column(db.Text)



    resumes = db.relationship("Resume", backref="users", cascade="all, delete")




    @property
    def password(self):
        return self.hashed_password


    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)


    def check_password(self, password):
        return check_password_hash(self.password, password)




    def update_aboutme(new_firstname, new_lastname, new_jobtitle, new_abouttext, new_github_link, new_linkedin_link):
        # self.avatar = new_avatar
        self.firstname = new_firstname
        self.lastname = new_lastname
        self.jobtitle = new_jobtitle
        self.about_text = new_abouttext
        self.github_link = new_github_link
        self.linkedin_link = new_linkedin_link

    





    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "avatar": self.avatar,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "jobtitle": self.jobtitle,
            "about_text": self.about_text,
            "github_link": self.github_link,
            "linkedin_link": self.linkedin_link,
        }
