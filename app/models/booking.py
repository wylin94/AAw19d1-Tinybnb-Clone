from .db import db

class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    spotId = db.Column(db.Integer, db.ForeignKey("spots.id"), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    startDate = db.Column(db.DateTime, nullable=False)
    endDate = db.Column(db.DateTime, nullable=False)
    num_guests = db.Column(db.Integer, nullable=False)

    spot = db.relationship("Spot", back_populates="bookings")
    user = db.relationship("User", back_populates="bookings")

    def to_dict(self):
        return {
            'id': self.id,
            'spotId': self.spotId,
            'userId': self.userId,
            'startDate': self.startDate,
            'endDate': self.endDate,
            'numGuest': self.num_guests
        }
