from flask_wtf import FlaskForm
from wtforms import IntegerField, DateField
from wtforms.validators import DataRequired

class NewBookingForm(FlaskForm):
  spotId = IntegerField('spotId', validators=[DataRequired()])
  userId = IntegerField('userId', validators=[DataRequired()])
  startDate = DateField('startDate', validators=[DataRequired()])
  endDate = DateField('endDate', validators=[DataRequired()])
  numGuests = IntegerField('numGuests', validators=[DataRequired()])

