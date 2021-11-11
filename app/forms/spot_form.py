from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, FloatField, SelectField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange

class SpotForm(FlaskForm):
  name = StringField('Name', validators=[DataRequired("Please provide a spot name."), Length(-1, 255, "Spot name must be less than 255 characters.")])
  price = FloatField('Price', validators=[DataRequired("Please provide a price per night."), NumberRange(25, 10000, "Price per night must be between $25 and $10,000")])
  description = TextAreaField('Description', validators=[DataRequired("Please provide a spot description."), Length(-1, 3000, "Description must be under 3000 characters.")])
  type = SelectField('Type', choices=["Condo", "Cabin", "House", "Villa", "Tree House", "Beach House", "Camp Site"], validators=[DataRequired("Please select a spot type.")])
  num_bedrooms = IntegerField('Number of bedrooms', validators=[DataRequired("Please provide the number of bedrooms."), NumberRange(1, 100, "Number of bedrooms must be between 1 and 100.")])
  num_beds = IntegerField('Number of beds', validators=[DataRequired("Please provide the number of beds."), NumberRange(1, 100, "Number of beds must be between 1 and 100.")])
  num_baths = IntegerField('number of baths', validators=[DataRequired("Please provide the number of baths."), NumberRange(1, 100, "Number of baths must be between 1 and 100.")])
  total_guests = IntegerField('Total guests', validators=[DataRequired("Please provide the maximum occupancy."), NumberRange(1, 100, "Maximum occupancy must be between 1 and 100.")])
  state = StringField('State', validators=[DataRequired("Please select the state.")])
  address = StringField('Address', validators=[DataRequired("Please provide the address of your listing."), Length(-1, 255, "Address must be under 255 characters.")])
  longitude = FloatField('Longitude', validators=[DataRequired("Please provide the longitude of your listing."), NumberRange(-180, 80, "Minimum longitude is -180 and Maximum is 80.")])
  latitude = FloatField('Latitude', validators=[DataRequired("Please provide the latitude of your listing."), NumberRange(-90, 90, "Minimum latitude is -90 and Maximum is 90.")])

  submit = SubmitField('Host Spot')
