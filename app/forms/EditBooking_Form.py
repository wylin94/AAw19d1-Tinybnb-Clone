from flask_wtf import FlaskForm
from wtforms import DateField
from wtforms.validators import DataRequired

class EditBookingForm(FlaskForm):
  startDate = DateField('startDate', validators=[DataRequired()])
  endDate = DateField('endDate', validators=[DataRequired()])
