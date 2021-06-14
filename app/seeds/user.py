

from app.models import db, User





def seed_user():
  admin = User()
  db.session.add(admin)
  db.session.commit()





def undo_user():
  db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
  db.session.commit()
