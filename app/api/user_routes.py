from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User,db

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}

@user_routes.route('/<int:id>')
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>', methods=["PATCH"])
@login_required
def update_user(id):
    body = request.json
    user = User.query.get(id)
    if body["bio"]:
        user.bio = body["bio"]
    if body["profilePic"]:
        user.profile_pic = body["profilePic"]
    db.session.commit()
    return user.to_dict()
