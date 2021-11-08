from app.models import db, Spot


# Adds a demo user, you can add other users here if you want
def seed_spots():
    spot1 = Spot(
        userId='1',
        address='123 Test Ave',
        city='San Jose',
        state='CA',
        country='USA',
        lat='37.561299565623536',
        lng='-122.00983107099384',
        name='spot1',
        price='100'
    )

    spot2 = Spot(
        userId='2',
        address='456 Test Ave',
        city='Brooklyn',
        state='NY',
        country='USA',
        lat='40.67484963526252',
        lng='-73.94225855840969',
        name='spot2',
        price='200'
    )

    spot3 = Spot(
        userId='3',
        address='789 Test Ave',
        city='Seattle',
        state='WA',
        country='USA',
        lat='47.6277536346871',
        lng='-122.3180385962225',
        name='spot3',
        price='300'
    )

    db.session.add(spot1)
    db.session.add(spot2)
    db.session.add(spot3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_spots():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()
