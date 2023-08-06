import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

from .models import db, User

from .api.auth_routes import auth_routes
from .api.about_routes import about_routes
from .api.skills_routes import skills_routes
from .api.projects_routes import project_routes
from .api.experience_routes import experience_routes
from .api.education_routes import educations_routes

from .seeds import seed_commands

from .config import Config

app = Flask(__name__)

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)

app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(about_routes, url_prefix='/api/about')
app.register_blueprint(skills_routes, url_prefix='/api/skills')
app.register_blueprint(project_routes, url_prefix='/api/projects')
app.register_blueprint(experience_routes, url_prefix='/api/experiences')
app.register_blueprint(educations_routes, url_prefix='/api/educations')

db.init_app(app)
Migrate(app, db)
CORS(app)


@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    print("path", path)
    from datetime import datetime
    # Get current local timestamp as a string
    timestamp_str = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    return {"success": timestamp_str}
