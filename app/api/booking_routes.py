from flask import Blueprint, redirect, url_for, request
from app.models import Booking
from app.models.db import db
from flask_login import current_user, login_required
from app.forms.NewBooking_Form import NewBookingForm
from app.forms.EditBooking_Form import EditBookingForm

booking_routes = Blueprint('bookings', __name__)

@booking_routes.route('/my-reservations')
def get_bookings():
  # if not current_user.is_authenticated:
    # return redirect(url_for("/api/spots"))
    # return "You are not a logined user. Please login first"

  bookings = Booking.query.filter(Booking.userId==current_user.id).all()
  return {booking.id: booking.to_dict() for booking in bookings}



@booking_routes.route('/', methods=['POST'])
def add_booking():
  form = NewBookingForm()
  form["csrf_token"].data = request.cookies["csrf_token"]


  if form.validate_on_submit():
    new_booking = Booking(
      spotId = form.data['spotId'],
      userId = form.data['userId'],
      startDate = form.data['startDate'],
      endDate = form.data['endDate']
    )
    db.session.add(new_booking)
    db.session.commit()

    return new_booking.to_dict()

  else:
    return form.errors

@booking_routes.route('/<int:id>', methods=['PATCH'])
def edit_booking(id):
  form = EditBookingForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  booking = Booking.query.get(id)

  if not booking or booking.userId != current_user.id:
    return {"errors": ["No authorization"]}, 401

  if form.validate_on_submit():
    booking.startDate = form.data['startDate']
    booking.endDate = form.data['endDate']
    db.session.commit()
    return booking.to_dict()

  else:
    return form.errors

@booking_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_booking(id):
  userId = current_user.id
  deleted_booking = Booking.query.get(id)

  if not deleted_booking or deleted_booking.userId != current_user.id:
    return {"errors": ["No authorization"]}, 401

  db.session.delete(deleted_booking)
  db.session.commit()
  return deleted_booking.to_dict()
