from app.models import db, Image


# Adds a demo user, you can add other users here if you want
def seed_images():
    image1 = Image(
        spotId='1',
        url='https://tinybnb.s3.us-west-1.amazonaws.com/spot1.jpeg',
    )

    image2 = Image(
        spotId='1',
        url='https://tinybnb.s3.us-west-1.amazonaws.com/spot2.jpeg',
    )

    image3 = Image(
        spotId='1',
        url='https://tinybnb.s3.us-west-1.amazonaws.com/spot3.jpeg',
    )

    image4 = Image(
        spotId='1',
        url='https://tinybnb.s3.us-west-1.amazonaws.com/spot4.jpeg',
    )

    image5 = Image(
        spotId='1',
        url='https://tinybnb.s3.us-west-1.amazonaws.com/spot5.jpeg',
    )

    image6 = Image(
        spotId='2',
        url='https://www.utopian-villas.com/wp-content/uploads/2020/04/The-Zion-570x320-1.png',
    )

    image7 = Image(
        spotId='3',
        url='https://www.utopian-villas.com/wp-content/uploads/2020/04/The-Zion-570x320-1.png',
    )

    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image6)
    db.session.add(image7)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
