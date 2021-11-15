from flask import Blueprint, request
from app.models import Image, db

image_routes = Blueprint('images', __name__)

@image_routes.route('/', methods=[ "POST"])
def addImages():
        if request.json["spotId"]:
            newImage = Image(
                spotId=request.json["spotId"],
                url=request.json["url"]
            )
            db.session.add(newImage)
            db.session.commit()
            return newImage.to_dict()


@image_routes.route('/<int:spot_id>', methods=['DELETE'])
def removeImages(spot_id):

    removeImg = Image.query.filter_by(spotId=spot_id)

    db.session.delete(removeImg)
    db.session.commit()
    return removeImg.to_dict()

