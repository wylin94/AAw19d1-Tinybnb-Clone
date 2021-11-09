from flask import Blueprint, redirect, url_for, request
from app.models import Booking
from app.models.db import db
from flask_login import current_user
# from app.forms.booking_form import NewBookingForm

booking_routes = Blueprint('bookings', __name__)

@booking_routes.route('/')
def get_bookings():
  # if not current_user.is_authenticated:
    # return redirect(url_for("/api/spots"))
    # return "You are not a logined user. Please login first"

  bookings = Booking.query.filter(Booking.userId==current_user.id).all()
  return {booking.id: booking.to_dict() for booking in bookings}



@booking_routes.route('/new', methods=['POST'])
def add_booking():
  form = NewBookingForm()

  if form.validate_on_submit():
    data = Booking()
    form.populate_obj(data)

    db.session.add(data)
    db.session.commit()

    return data.to_dict()
  else:

    return form.errors

# @booking_routes.route('/<int:bookingId>', methods=['PUT'])
# def edit_booking():
  # form =
