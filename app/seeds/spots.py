from app.models import db, Spot

def seed_spots():
    spot1 = Spot(
        userId='1',
        address='123 Test Ave',
        city='San Jose',
        state='CA',
        country='USA',
        lat='37.561299565623536',
        lng='-122.00983107099384',
        name='Name1',
        price='100'
    )

    spot2 = Spot(
        userId='1',
        address='123 Test Ave',
        city='San Jose',
        state='CA',
        country='USA',
        lat='37.419980',
        lng='-122.112730',
        name='Name2',
        price='100'
    )

    spot3 = Spot(
        userId='1',
        address='123 Test Ave',
        city='San Jose',
        state='CA',
        country='USA',
        lat='37.423939',
        lng='-122.125991',
        name='Name3',
        price='100'
    )

    spot4 = Spot(
        userId='1',
        address='123 Test Ave',
        city='Mountain View',
        state='CA',
        country='USA',
        lat='37.407305',
        lng='-122.086380',
        name='Name4',
        price='100'
    )

    spot5 = Spot(
        userId='1',
        address='123 Test Ave',
        city='Palo Alto',
        state='CA',
        country='USA',
        lat='37.435563',
        lng='-122.143538',
        name='Name5',
        price='100'
    )

    spot6 = Spot(
        userId='1',
        address='123 Test Ave',
        city='Atherton',
        state='CA',
        country='USA',
        lat='37.460683',
        lng='-122.208270',
        name='Name6',
        price='100'
    )

    spot7 = Spot(
        userId='2',
        address='456 Test Ave',
        city='Brooklyn',
        state='NY',
        country='USA',
        lat='40.67484963526252',
        lng='-73.94225855840969',
        name='Name7',
        price='200'
    )

    spot8 = Spot(
        userId='3',
        address='789 Test Ave',
        city='Seattle',
        state='WA',
        country='USA',
        lat='47.6277536346871',
        lng='-122.3180385962225',
        name='Name8',
        price='300'
    )

    db.session.add(spot1)
    db.session.add(spot2)
    db.session.add(spot3)
    db.session.add(spot4)
    db.session.add(spot5)
    db.session.add(spot6)
    db.session.add(spot7)
    db.session.add(spot8)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_spots():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()
