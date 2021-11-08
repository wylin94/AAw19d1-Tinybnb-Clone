from flask import Blueprint
from app.models import Spot
from flask_login import login_required

spot_routes = Blueprint('spots', __name__)


@spot_routes.route('/')
def allSpots():
    spots = Spot.query.all()
    print({'spots': [spot.to_dict() for spot in spots]})
    return {'spots': [spot.to_dict() for spot in spots]}


# @spot_routes.route('/')
# def spotsByCity():
#     spots = Spot.query.all()
