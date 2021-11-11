from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    name = db.Column(db.String(100), nullable=False)
    bio = db.Column(db.Text, nullable=True)
    profile_pic = db.Column(db.Text, nullable=True)
    is_superhost = db.Column(db.Boolean, default=False)
    hashed_password = db.Column(db.String(255), nullable=False)

    spots = db.relationship('Spot', back_populates="user")
    bookings = db.relationship('Booking', back_populates="user")
    reviews = db.relationship('Review', back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'bio': self.bio,
            'profile_pic': self.profile_pic,
            'is_superhost': self.is_superhost,
            # 'reviews': {review.to_dict()['id']: review.to_dict() for review in self.reviews}
        }
