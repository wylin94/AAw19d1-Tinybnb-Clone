from .db import db


class Spot(db.Model):
    __tablename__ = 'spots'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    country = db.Column(db.String(50), nullable=False)
    lat = db.Column(db.Float)
    lng = db.Column(db.Float)
    name = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Float, nullable=False)

    user = db.relationship("User", back_populates="spots")
    images = db.relationship("Image", back_populates="spot", cascade="all, delete")
    bookings = db.relationship("Booking", back_populates="spot", cascade="all, delete")
    reviews = db.relationship("Review", back_populates="spot", cascade="all, delete")


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'country': self.country,
            'lat': self.lat,
            'lng': self.lng,
            'name': self.name,
            'price': self.price,
        }
