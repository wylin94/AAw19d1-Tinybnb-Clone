from flask import Blueprint, redirect, url_for
from app.models import Booking
from flask_login import login_required, current_user

booking_routes = Blueprint('bookings', __name__)

@booking_routes.route('/')
def get_bookings():
  if not current_user.is_authenticated:
    # return redirect(url_for("/api/spots"))
    pass

  bookings = Booking.query.filter(Booking.userId==current_user.id).all()
  return {booking.id: booking.to_dict() for booking in bookings}
