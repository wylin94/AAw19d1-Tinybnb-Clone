from app.models import db, Booking


# Adds a demo user, you can add other users here if you want
def seed_bookings():
    booking1 = Booking(
        spotId=1,
        userId=2,
        startDate='2021-12-01',
        endDate='2021-12-06',
        numGuests=3
    )

    booking2 = Booking(
        spotId=1,
        userId=1,
        startDate='2021-12-07',
        endDate='2021-12-12',
        numGuests=2
    )

    db.session.add(booking1)
    db.session.add(booking2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_bookings():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
