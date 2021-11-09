from flask_wtf import FlaskForm
from wtforms import IntegerField, DateTimeField
from wtforms.validators import DataRequired

class NewBookingForm(FlaskForm):
  spotId = IntegerField('spotId', validators=[DataRequired()])
  userId = IntegerField('userId', validators=[DataRequired()])
  startDate = DateTimeField('startDate', validators=[DataRequired()])
  endDate = DateTimeField('endDate', validators=[DataRequired()])
