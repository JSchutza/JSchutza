

from app.models import db, User
import os




def seed_user():
  admin = User(
    email=os.environ.get("ADMIN_EMAIL"),
    password=os.environ.get('ADMIN_PASSWORD'),
    avatar=None,
    firstname='Joshua',
    lastname='Schutza',
    jobtitle='Software Engineer - Leader - Advocate',
    about_text='I am a determined individual who is working towards a career as a leader, visionary, and advocate. One of my many objectives is to impact the workforce through developing individuals and drawing out their strengths. I am seeking a working and learning opportunity that will utilize my research skills and natural ability to see growth and potential within people and businesses.',
    github_link='https://github.com/JSchutza',
    linkedin_link='https://www.linkedin.com/in/joshua-schutza-559819ba/'
  )

  db.session.add(admin)
  db.session.commit()





def undo_user():
  db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
  db.session.commit()
