from app.models import db, Spot


# Adds a demo user, you can add other users here if you want
def seed_spots():
    spot1 = Spot(
        name='Name1',
        price=100,
        description='This a test location, this should work.',
        spot_type="Cabin",
        num_bedrooms=1,
        num_baths=1,
        num_beds=2,
        total_guests=3,
        city='California',
        st_address='123 Test Ave, San Jose, CA 94088',
        longitude='-122.00983107099384',
        latitude='37.561299565623536',
        user_id=1,
    )

    db.session.add(spot1)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_spots():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
