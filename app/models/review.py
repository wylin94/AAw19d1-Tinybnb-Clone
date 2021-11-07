from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    spotId = db.Column(db.Integer, db.ForeignKey("spots.id"), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    review = db.Column(db.Text, nullable=False)


    spot = db.relationship("Spot", back_populates="reviews")
    user = db.relationship("User", back_populates="reviews")

    def to_dict(self):
        return {
            'id': self.id,
            'spotId': self.spotId,
            'userId': self.userId,
            'review': self.review,
        }
