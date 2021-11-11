from app.models import db, Booking


# Adds a demo user, you can add other users here if you want
def seed_bookings():
    booking1 = Booking(
        spot_id=1,
        user_id=2,
        start_date='2021-12-01',
        end_date='2021-12-06',
        num_guests=3
    )

    booking2 = Booking(
        spot_id=1,
        user_id=1,
        start_date='2021-12-07',
        end_date='2021-12-12',
        num_guests=2
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
