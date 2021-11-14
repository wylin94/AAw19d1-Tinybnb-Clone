from app.models import spot
from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    spot_id = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)
    clean_rating = db.Column(db.Integer, nullable=False)
    accur_rating = db.Column(db.Integer, nullable=False)
    comm_rating = db.Column(db.Integer, nullable=False)
    location_rating = db.Column(db.Integer, nullable=False)
    check_in_rating = db.Column(db.Integer, nullable=False)
    value_rating = db.Column(db.Integer, nullable=False)
    review_text = db.Column(db.Text, nullable=False)

    user = db.relationship('User', back_populates='reviews')
    spot = db.relationship('Spot', back_populates='reviews')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'spotId': self.spot_id,
            'cleanRating': self.clean_rating,
            'accurRating': self.accur_rating,
            'commRating': self.comm_rating,
            'locationRating': self.location_rating,
            'checkInRating': self.check_in_rating,
            'valueRating': self.value_rating,
            'reviewText': self.review_text,
            'avgRating': float("{:.2f}".format((self.clean_rating + self.accur_rating + self.comm_rating + self.location_rating + self.check_in_rating + self.value_rating) / 6)),
            'user': {"username": self.user.to_dict()['username'], "profilePic": self.user.to_dict()["profile_pic"]},
        }
