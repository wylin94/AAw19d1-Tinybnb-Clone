from app.models import db, Image


# Adds a demo user, you can add other users here if you want
def seed_images():
    images1 = Image(
        spotId='1',
        url='https://www.utopian-villas.com/wp-content/uploads/2020/04/The-Zion-570x320-1.png',
    )

    images2 = Image(
        spotId='2',
        url='https://www.utopian-villas.com/wp-content/uploads/2020/04/The-Zion-570x320-1.png',
    )

    images3 = Image(
        spotId='3',
        url='https://www.utopian-villas.com/wp-content/uploads/2020/04/The-Zion-570x320-1.png',
    )

    

    
    db.session.add(images1)
    db.session.add(images2)
    db.session.add(images3)




    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
