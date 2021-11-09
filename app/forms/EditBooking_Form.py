from flask_wtf import FlaskForm
from wtforms import DateTimeField
from wtforms.validators import DataRequired

class EditBookingForm(FlaskForm):
  startDate = DateTimeField('startDate', validators=[DataRequired()])
  endDate = DateTimeField('endDate', validators=[DataRequired()])
