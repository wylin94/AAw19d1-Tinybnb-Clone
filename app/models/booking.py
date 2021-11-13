from .db import db

class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    spot_id = db.Column(db.Integer, db.ForeignKey("spots.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    start_date = db.Column(db.DateTime, nullable=False)
    end_date = db.Column(db.DateTime, nullable=False)
    num_guests = db.Column(db.Integer, nullable=False)

    spot = db.relationship("Spot", back_populates="bookings")
    user = db.relationship("User", back_populates="bookings")

    def to_dict(self):
        return {
            'id': self.id,
            'spotId': self.spot_id,
            'userId': self.user_id,
            'startDate': self.start_date,
            'endDate': self.end_date,
            'numGuest': self.num_guests
        }
