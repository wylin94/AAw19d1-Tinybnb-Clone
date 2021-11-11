from app.models import db, Review

def seed_reviews():
    review1 = Review(
        user_id=2,
        spot_id=1,
        clean_rating=5,
        accur_rating=4,
        comm_rating=4,
        location_rating=5,
        check_in_rating=4,
        value_rating=4,
        review_text='This place was an absolute blast to stay at, would highly recommend'
    )

    db.session.add(review1)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
