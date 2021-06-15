from flask.cli import AppGroup
from .user import seed_user, undo_user


seed_commands = AppGroup('seed')



@seed_commands.command('all')
def seed():
    seed_user()





@seed_commands.command('undo')
def undo():
    undo_user()
