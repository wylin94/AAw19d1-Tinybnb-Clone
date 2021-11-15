from app.models import db, Image

def seed_images():
    image1 = Image(
        spotId='1',
        url='https://a0.muscache.com/im/pictures/miso/Hosting-52599791/original/481ecf18-a3f5-4e80-83ea-25b729c8bb3d.jpeg?im_w=1200',
    )

    image2 = Image(
        spotId='1',
        url='https://a0.muscache.com/im/pictures/miso/Hosting-52599791/original/9d8dc3fe-acb1-4cd6-ac4e-68531f108d40.jpeg?im_w=720',
    )

    image3 = Image(
        spotId='1',
        url='https://a0.muscache.com/im/pictures/miso/Hosting-52599791/original/a0620dd6-bc2f-4139-99d6-a62076d268d4.jpeg?im_w=720',
    )

    image4 = Image(
        spotId='1',
        url='https://a0.muscache.com/im/pictures/miso/Hosting-52599791/original/9d8dc3fe-acb1-4cd6-ac4e-68531f108d40.jpeg?im_w=720',
    )

    image5 = Image(
        spotId='1',
        url='https://a0.muscache.com/im/pictures/miso/Hosting-52599791/original/e77f0da7-a691-4155-84d1-6e6271c04492.jpeg?im_w=720',
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
