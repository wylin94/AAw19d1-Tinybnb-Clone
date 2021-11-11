from .db import db

class SpotPic(db.Model):
    __tablename__ = 'spotPics'

    id = db.Column(db.Integer, primary_key=True)
    spotId = db.Column(db.Integer, db.ForeignKey("spots.id"), nullable=False)
    imgUrl = db.Column(db.Text, nullable=False)

    spot = db.relationship("Spot", back_populates="spot_pics")

    def to_dict(self):
        return {
            'id': self.id,
            'spotId': self.spotId,
            'imgUrl': self.url
        }