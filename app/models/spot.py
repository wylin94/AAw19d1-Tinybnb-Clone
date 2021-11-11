from app.models.review import Review
from .db import db

class Spot(db.Model):
    __tablename__ = 'spots'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    name = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=False)
    spot_type = db.Column(db.String(100), nullable=False)
    num_bedrooms = db.Column(db.Integer, nullable=False)
    num_baths = db.Column(db.Integer, nullable=False)
    num_beds = db.Column(db.Integer, nullable=False)
    total_guests = db.Column(db.Integer, nullable=False)

    user = db.relationship("User", back_populates="spots")
    spot_pics = db.relationship('SpotPic', back_populates='spot', cascade='all, delete')
    bookings = db.relationship("Booking", back_populates="spot", cascade="all, delete")
    reviews = db.relationship("Review", back_populates="spot", cascade="all, delete")


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'address': self.address,
            'state': self.state,
            'state': self.state,
            'country': self.country,
            'lat': self.lat,
            'lng': self.lng,
            'name': self.name,
            'price': self.price,
            'spotPics': [spotPic.to_dict()['imgUrl'] for spotPic in self.spot_pics],
            'reviews': [review.to_dict() for review in self.reviews],
        }
