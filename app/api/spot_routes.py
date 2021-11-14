from flask import Blueprint, request
from app.models import Spot, db
from flask_login import login_required

from app.forms import NewSpotForm



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


@spot_routes.route('/', methods=['POST'])
@login_required
def addSpots():

  form = NewSpotForm()
  form["csrf_token"].data = request.cookies["csrf_token"]
    # Reserve for add Spot form/modal

  if form.validate_on_submit():
    newSpot = Spot(
        userId = request.json["userId"],
        address=form.data['address'],
        city=form.data['city'],
        state=form.data['state'],
        country=form.data['country'],
        lng=form.data['lng'],
        lat=form.data['lat'],
        name=form.data['name'],
        price=form.data['price'],
        )
    db.session.add(newSpot)
    db.session.commit()

    return newSpot.to_dict()

  else:
    return form.errors




@spot_routes.route('/<int:spot_id>', methods=['PATCH'])
def editSpot(spot_id):


    editedSpot = Spot.query.get(spot_id)

    editedSpot.address = request.json["address"],
    editedSpot.city = request.json["city"],
    editedSpot.state = request.json["state"],
    editedSpot.country = request.json["country"],
    # editedSpot.lat = request.json["lat"]
    # editedSpot.lng = request.json["lng"]
    editedSpot.name = request.json["name"],
    editedSpot.price = request.json["price"],

    db.session.commit()
    return editedSpot.to_dict()

@spot_routes.route('/<int:spot_id>', methods=['DELETE'])
def deleteSpot(spot_id):

    removeSpot = Spot.query.get(spot_id)

    db.session.delete(removeSpot)
    db.session.commit()
    return removeSpot.to_dict()
