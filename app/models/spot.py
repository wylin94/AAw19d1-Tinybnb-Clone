from app.models.review import Review
from .db import db

class Spot(db.Model):
    __tablename__ = 'spots'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=False)
    spot_type = db.Column(db.String(100), nullable=False)
    num_bedrooms = db.Column(db.Integer, nullable=False)
    num_baths = db.Column(db.Integer, nullable=False)
    num_beds = db.Column(db.Integer, nullable=False)
    total_guests = db.Column(db.Integer, nullable=False)
    city = db.Column(db.String(100), nullable=False)
    st_address = db.Column(db.String(255), nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"),nullable=False)


    #relationship
    user = db.relationship('User', back_populates='spots')
    bookings = db.relationship('Booking', back_populates='spot', cascade='all, delete')
    reviews = db.relationship('Review', back_populates='spot', cascade='all, delete')
    spot_pics = db.relationship('SpotPic', back_populates='spot', cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'spotType': self.spot_type,
            'numBedrooms': self.num_bedrooms,
            'numBaths': self.num_baths,
            'numBeds': self.num_beds,
            'totalGuests': self.total_guests,
            'city': self.city,
            'stAddress': self.st_address,
            'longitude': self.longitude,
            'latitude': self.latitude,
            'user': self.user.to_dict(),
            'bookings': [ booking.to_dict() for booking in self.bookings],
            'reviews': [review.to_dict() for review in self.reviews],
            'spotPics': [spotPic.to_dict()['imgUrl'] for spotPic in self.spot_pics]
        }
