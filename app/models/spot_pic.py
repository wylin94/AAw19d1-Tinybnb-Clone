from .db import db

class SpotPic(db.Model):
    __tablename__ = 'spotPics'

    id = db.Column(db.Integer, primary_key=True)
    spot_id = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)
    img_url = db.Column(db.Text, nullable=False)

    spot = db.relationship('Spot', back_populates='spot_pics')

    def to_dict(self):
        return {
            'id': self.id,
            'spot_id': self.spot_id,
            'imgUrl': self.img_url
        }
