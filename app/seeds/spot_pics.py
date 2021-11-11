from app.models import db, SpotPic

# Adds a demo user, you can add other users here if you want
def seed_spot_pics():
    pic1 = SpotPic(
        spotId=1,
        imgUrl='https://aceraft.com/wp-content/uploads/2019/04/ACE-Adventure-Adventure-Resort-West-Virginia-Rental-Cabin-Aspen.jpg',
    )

    pic2 = SpotPic(
        spotId=1,
        imgUrl='https://www.cruisemummy.co.uk/wp-content/uploads/2019/07/britannia-inside-1.jpg',
    )

    pic3 = SpotPic(
        spotId=1,
        imgUrl='https://cdn.pixabay.com/photo/2019/03/02/19/50/log-cabin-4030556_1280.jpg',
    )

    db.session.add(pic1)
    db.session.add(pic2)
    db.session.add(pic3)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_spot_pics():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
