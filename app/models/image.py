from .db import db


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True, unique=True)
    spotId = db.Column(db.Integer, db.ForeignKey("spots.id"), nullable=False)
    url = db.Column(db.Text, nullable=False)


    spot = db.relationship("Spot", back_populates="images")

    def to_dict(self):
        return {
            'id': self.id,
            'spotId': self.spotId,
            'url': self.url
        }
