

from app.models import db, User
import os




def seed_user():
  admin = User(
    email=os.environ.get("ADMIN_EMAIL"),
    password=os.environ.get('ADMIN_PASSWORD'),
    avatar='here',
    firstname='Joshua',
    lastname='Schutza',
    jobtitle='here',
    about_text='here',
    github_link='https://github.com/JSchutza',
    linkedin_link='https://www.linkedin.com/in/joshua-schutza-559819ba/'
  )

  db.session.add(admin)
  db.session.commit()





def undo_user():
  db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
  db.session.commit()
