from flask import Blueprint, request
from app.models import Booking, db

booking_routes = Blueprint('bookings', __name__)

@booking_routes.route('/<int:id>', methods=["GET", "DELETE"])
def get_booking(id):
    if request.method == "GET":
        curr_booking = Booking.query.get(id)
        return curr_booking.to_dict()
    if request.method == "DELETE":
        curr_booking = Booking.query.get(id)
        db.session.delete(curr_booking)
        db.session.commit()
        return 'ok'

@booking_routes.route('/', methods=["POST", "GET"])
def make_booking():
    if request.method == "POST":
        body = request.json
        new_booking = Booking(
            spot_id=body["spotId"],
            user_id=body["userId"],
            start_date=body["startDate"],
            end_date=body["endDate"],
            num_guests=body["numGuests"]
        )
        db.session.add(new_booking)
        db.session.commit()
        return new_booking.to_dict()
    if request.method == "GET":
        bookings = Booking.query.all()
        return {"allBookings": [booking.to_dict() for booking in bookings]}
