from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, FloatField, SelectField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange

class EditSpotForm(FlaskForm):
  name = StringField('name', validators=[DataRequired("Please provide a spot name."), Length(-1, 255, "Spot name must be less than 255 characters.")])
  price = FloatField('price', validators=[DataRequired("Please provide a price per night."), NumberRange(25, 10000, "Price per night must be between $25 and $10,000")])
  description = TextAreaField('description', validators=[DataRequired("Please provide a spot description."), Length(-1, 3000, "Description must be under 3000 characters.")])
  num_bedrooms = IntegerField('num_bedrooms', validators=[DataRequired("Please provide the number of bedrooms."), NumberRange(1, 100, "Number of bedrooms must be between 1 and 100.")])
  num_beds = IntegerField('num_beds', validators=[DataRequired("Please provide the number of beds."), NumberRange(1, 100, "Number of beds must be between 1 and 100.")])
  num_baths = IntegerField('num_baths', validators=[DataRequired("Please provide the number of baths."), NumberRange(1, 100, "Number of baths must be between 1 and 100.")])
  total_guests = IntegerField('total_guests', validators=[DataRequired("Please provide the maximum occupancy."), NumberRange(1, 100, "Maximum occupancy must be between 1 and 100.")])

  submit = SubmitField('Host Spot')
