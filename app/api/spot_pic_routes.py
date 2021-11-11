from flask import Blueprint, request
from app.models import SpotPic, db

spot_pic_routes = Blueprint('spot_pics', __name__)

@spot_pic_routes.route('/', methods=["GET", "POST", "DELETE"])
def spot_pics():
    if request.method == "GET":
        all_pics = SpotPic.query.all()
        return {"allPics": [spot_pic.to_dict() for spot_pic in all_pics]}
    if request.method == "POST":
        body = request.json
        if body["spotId"]:
            new_pic = SpotPic(
                spot_id=body["spotId"],
                img_url=body["imgUrl"]
            )
            db.session.add(new_pic)
            db.session.commit()
            return new_pic.to_dict()

@spot_pic_routes.route('/<int:id>', methods=['DELETE'])
def del_spot_pic(id):
    pic = SpotPic.query.get(id)
    db.session.delete(pic)
    db.session.commit()
    return 'ok'
