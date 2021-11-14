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


