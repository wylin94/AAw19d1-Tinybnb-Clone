from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User

def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

class SignUpForm(FlaskForm):
    name = StringField(
        'name', validators=[DataRequired("Please provide a name."), Length(-1, 100, "Name must be less than 100 characters.")])
    email = StringField('email', validators=[DataRequired("Please provide an email."), user_exists, Email("Please enter a valid email."), Length(-1, 255, "Email must be under 255 characters.")])
    password = StringField('password', validators=[DataRequired("Please provide a password"), Length(-1, 100, "Password must be under 100 characters.")])
    bio = TextAreaField('bio', validators=[DataRequired("Please provide a bio."), Length(-1, 3000, "Your bio must be under 3000 characters.")])
    profile_pic = StringField('profile_pic', validators=[DataRequired("Please provide a profile picture url.")])
