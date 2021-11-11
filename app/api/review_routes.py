from flask import Blueprint, request
from app.models import Review, db

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/', methods=["GET", "POST"])
def reviews():
    if request.method == "GET":
        reviews = Review.query.all()
        return {"allReviews": [review.to_dict() for review in reviews]}
    if request.method == "POST":
        body = request.json
        new_review = Review(
            user_id=body["userId"],
            spot_id=body["spotId"],
            clean_rating=body["cleanRating"],
            accur_rating=body["accurRating"],
            comm_rating=body["commRating"],
            location_rating=body["locationRating"],
            check_in_rating=body["checkInRating"],
            value_rating=body["valueRating"],
            review_text=body["reviewText"]
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()

@review_routes.route('/<int:id>', methods=["DELETE"])
def delete_reviews(id):
    curr_review = Review.query.get(id)
    db.session.delete(curr_review)
    db.session.commit()
    return 'ok'
