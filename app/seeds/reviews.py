from app.models import db, Review


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    review1 = Review(
        spotId='1',
        userId='2',
        review='It\'s good.',
    )

    review2 = Review(
        spotId='1',
        userId='3',
        review='It\'s good.',
    )

    review3 = Review(
        spotId='2',
        userId='1',
        review='It\'s good.',
    )

    review4 = Review(
        spotId='2',
        userId='3',
        review='It\'s good.',
    )

    review5 = Review(
        spotId='3',
        userId='1',
        review='It\'s good.',
    )

    review6 = Review(
        spotId='3',
        userId='2',
        review='It\'s good.',
    )

    
    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)



    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
