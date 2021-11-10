from flask import Blueprint, request
from app.models import Review, db
from flask_login import login_required


review_routes = Blueprint('reviews', __name__)


@review_routes.route("", methods=["POST"])
def addReview():

    # Reserve for add Review form/modal

    newReview = Review(

        spotId = request.json['spotId'],
        userId = request.json['userId'],
        review = request.json['comment'],
    )

    db.session.add(newReview)
    db.session.commit()
    return newReview.to_dict()


@review_routes.route('', methods=['PATCH'])
def editReview(review_id):

    # Reserve for edit Review form/modal

    editedReview = Review.query.get(review_id)

    editedReview.review = request.json["review"],
   
    db.session.commit()
    return editedReview.to_dict()


@review_routes.route('', methods=['DELETE'])
def deleteReview(review_id):


    deletedReview = Review.query.get(review_id)

    db.session.delete(deletedReview)
    db.session.commit()
    return deletedReview.to_dict()