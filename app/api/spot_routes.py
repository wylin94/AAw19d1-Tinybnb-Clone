from flask import Blueprint, request
from app.models import Spot, db
from flask_login import login_required


spot_routes = Blueprint('spots', __name__)


@spot_routes.route('/')
def allSpots():
    print(1)
    spots = Spot.query.all()
    print(2)
    return {'spots': [spot.to_dict() for spot in spots]}


@spot_routes.route('/search/<city>', methods=['GET'])
def searchByCity(city):
    spots = Spot.query.filter(Spot.city == city)
    return {'search': [spot.to_dict() for spot in spots]}


@spot_routes.route('', methods=['POST'])
def addSpots():
    request_json = request.get_json()
    newSpot = Spot(
        userId = request_json["userId"],
        address = request_json["address"],
        city = request_json["city"],
        state = request_json["state"],
        country = request_json["country"],
        name = request_json["name"],
        price = request_json["price"],
    )
    db.session.add(newSpot)
    db.session.commit()
    return request.get_json()