from flask import Blueprint, request
from app.models import Spot, db
from flask_login import login_required


spot_routes = Blueprint('spots', __name__)


@spot_routes.route('/')
def allSpots():
    spots = Spot.query.all()
    return {'spots': [spot.to_dict() for spot in spots]}
    # return {'spots': {spot.to_dict() for spot in spots}}

@spot_routes.route('/<int:spotId>', methods=['GET'])
def searchByCity(spotId):
    spots = Spot.query.filter(Spot.id == spotId)
    return {'singleSpot': [spot.to_dict() for spot in spots]}
    # return spot.to_dict() 


# @spot_routes.route('/search/<city>', methods=['GET'])
# def searchByCity(city):
#     spots = Spot.query.filter(Spot.city == city)
#     return {'search': [spot.to_dict() for spot in spots]}


@spot_routes.route('', methods=['POST'])
def addSpots():

    newSpot = Spot(
        userId = request.json["userId"],
        address = request.json["address"],
        city = request.json["city"],
        state = request.json["state"],
        country = request.json["country"],
        name = request.json["name"],
        price = request.json["price"],
    )

    db.session.add(newSpot)
    db.session.commit()
    return newSpot.to_dict()

@spot_routes.route('', methods=['PATCH'])
def editSpot(spot_id):

    editedSpot = Spot.query.get(spot_id)

    editedSpot.address = request.json["address"],
    editedSpot.city = request.json["city"],
    editedSpot.state = request.json["state"],
    editedSpot.country = request.json["country"],
    editedSpot.lat = request.json["lat"]
    editedSpot.lng = request.json["lng"]
    editedSpot.name = request.json["name"],
    editedSpot.price = request.json["price"],
    
    db.session.commit()
    return newSpot.to_dict()

@spot_routes.route('', methods=['DELETE'])
def deleteSpot(spot_id):

    removeSpot = Spot.query.get(spot_id)

    db.session.delete(removeSpot)
    db.session.commit()
    return removeSpot.to_dict()
