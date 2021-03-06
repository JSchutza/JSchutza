from flask import Blueprint, session, request
from app.models import User
from app.forms import LoginForm

from flask_login import current_user, login_user, logout_user, login_required



auth_routes = Blueprint('auth', __name__)








@auth_routes.route('/')
def authenticate():
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['']}






@auth_routes.route('/login', methods=['POST'])
def login():
    form = LoginForm()
    print(request.get_json())
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()

    return { 'errors': "Invalid login, please try again." }, 401





@auth_routes.route('/logout')
def logout():
    logout_user()
    return {'message': 'User logged out'}







@auth_routes.route('/unauthorized')
def unauthorized():
    return {'errors': ['']}, 401
