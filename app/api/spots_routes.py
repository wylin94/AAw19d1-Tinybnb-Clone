from flask import Blueprint, request
from flask_login import login_required
from app.models import Spot, db
from app.forms import SpotForm, EditSpotForm


spots_routes = Blueprint('spots', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@spots_routes.route('/')
def spots():
    spots = Spot.query.all()
    print('HERE', spots)
    return {"allSpots": [spot.to_dict() for spot in spots]}

@spots_routes.route('/', methods=['POST'])
@login_required
def create_spot():
    body = request.json
    form = SpotForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # print("-----------------", form)
    if form.validate_on_submit():
        spot = Spot(
        name=form.data['name'],
        price=form.data['price'],
        description=form.data['description'],
        spot_type=form.data['type'],
        num_bedrooms=form.data['num_bedrooms'],
        num_baths=form.data['num_baths'],
        num_beds=form.data['num_beds'],
        total_guests=form.data['total_guests'],
        city=form.data['city'],
        st_address=form.data['st_address'],
        longitude=form.data['longitude'],
        latitude=form.data['latitude'],
        userId=body['userId']
        )
        db.session.add(spot),
        db.session.commit()
        return spot.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@spots_routes.route('/<int:id>', methods=["GET", "PATCH", "DELETE"])
def update_delete_spot(id):
    if request.method == "GET":
        current_spot = Spot.query.get(id)
        return current_spot.to_dict()
    if request.method == "PATCH":
        form = EditSpotForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            current_spot = Spot.query.get(id)
            current_spot.description = form.data['description']
            current_spot.name = form.data['name']
            current_spot.num_baths = form.data['num_baths']
            current_spot.num_bedrooms = form.data['num_bedrooms']
            current_spot.num_beds = form.data['num_beds']
            current_spot.price = form.data['price']
            current_spot.total_guests = form.data['total_guests']

            db.session.commit()
            return current_spot.to_dict()
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    if request.method == "DELETE":
        current_spot = Spot.query.get(id)
        db.session.delete(current_spot)
        db.session.commit()
        return 'ok'
