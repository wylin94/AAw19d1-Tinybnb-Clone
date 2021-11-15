from typing import Text
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange


class NewSpotForm(FlaskForm):
    address = StringField('Address', validators=[DataRequired("Please provide the address of your listing."), Length(-1, 255, "Address must be under 255 characters.")])
    city = StringField('City', validators=[DataRequired("Please provide the city.")])
    state = StringField('State', validators=[DataRequired("Please select the state.")])
    country = StringField('Country', validators=[DataRequired("Please provide the country.")])
    lng = FloatField('Longitude', validators=[DataRequired("Please provide the longitude of your listing."), NumberRange(-180, 180, "Minimum longitude is -180 and Maximum is 180.")])
    lat = FloatField('Latitude', validators=[DataRequired("Please provide the latitude of your listing."), NumberRange(-90, 90, "Minimum latitude is -90 and Maximum is 90.")])
    name = StringField('Name', validators=[DataRequired("Please provide a spot name."), Length(-1, 255, "Spot name must be less than 255 characters.")])
    price = IntegerField('Price', validators=[DataRequired("Please provide a price per night."), NumberRange(1, 10000, "Price per night must be between $1 and $10,000")])
    

    submit = SubmitField('Host Spot')

