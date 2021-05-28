from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

from random import randint





class User(db.Model, UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(45), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    bio = db.Column(db.Text)
    avatar = db.Column(db.Text)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now)



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
