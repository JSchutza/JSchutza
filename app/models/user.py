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


    def to_dict(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "email": self.email,
            "bio": self.bio,
            "avatar": self.avatar,
            "created_at": self.created_at,
        }
