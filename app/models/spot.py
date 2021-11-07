from .db import db


class Spot(db.Model):
    __tablename__ = 'spots'

    id = db.Column(db.Integer, primary_key=True)
    userid = db.Column(db.Integer, nullable=False)
    address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    country = db.Column(db.String(50), nullable=False)
    lat = db.Column(db.Decimal, nullable=False)
    lng = db.Column(db.Decimal, nullable=False)
    name = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Decimal, nullable=False)

    user = db.relationship("User", back_populates="spots")

    def to_dict(self):
        return {
            'id': self.id,
            'userid': self.userid,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'country': self.country,
            'lat': self.lat,
            'lng': self.lng,
            'name': self.name,
            'price': self.price,
        }
