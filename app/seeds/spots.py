from app.models import db, Spot


# Adds a demo user, you can add other users here if you want
def seed_spots():
    # spot1 = Spot(
    #     userId='1',
    #     address='123 Test Ave',
    #     city='San Jose',
    #     state='CA',
    #     country='USA',
    #     lat='37.561299565623536',
    #     lng='-122.00983107099384',
    #     name='Name1',
    #     price='100'
    # )

    # spot2 = Spot(
    #     userId='1',
    #     address='123 Test Ave',
    #     city='San Jose',
    #     state='CA',
    #     country='USA',
    #     lat='37.419980',
    #     lng='-122.112730',
    #     name='Name2',
    #     price='100'
    # )

    # spot3 = Spot(
    #     userId='1',
    #     address='123 Test Ave',
    #     city='San Jose',
    #     state='CA',
    #     country='USA',
    #     lat='37.423939',
    #     lng='-122.125991',
    #     name='Name3',
    #     price='100'
    # )

    # spot4 = Spot(
    #     userId='1',
    #     address='123 Test Ave',
    #     city='Mountain View',
    #     state='CA',
    #     country='USA',
    #     lat='37.407305',
    #     lng='-122.086380',
    #     name='Name4',
    #     price='100'
    # )

    # spot5 = Spot(
    #     userId='1',
    #     address='123 Test Ave',
    #     city='Palo Alto',
    #     state='CA',
    #     country='USA',
    #     lat='37.435563',
    #     lng='-122.143538',
    #     name='Name5',
    #     price='100'
    # )

    # spot6 = Spot(
    #     userId='1',
    #     address='123 Test Ave',
    #     city='Atherton',
    #     state='CA',
    #     country='USA',
    #     lat='37.460683',
    #     lng='-122.208270',
    #     name='Name6',
    #     price='100'
    # )

    # spot7 = Spot(
    #     userId='2',
    #     address='456 Test Ave',
    #     city='Brooklyn',
    #     state='NY',
    #     country='USA',
    #     lat='40.67484963526252',
    #     lng='-73.94225855840969',
    #     name='Name7',
    #     price='200'
    # )

    # spot8 = Spot(
    #     userId='3',
    #     address='789 Test Ave',
    #     city='Seattle',
    #     state='WA',
    #     country='USA',
    #     lat='47.6277536346871',
    #     lng='-122.3180385962225',
    #     name='Name8',
    #     price='300'
    # )

    def seed_spots():
    spot1 = Spot(
        name='Modern Junior One Bedroom Near Downtown San Jose',
        price=168,
        city='San Jose',
        state='California',
        country='USA',
        address='800 5th Ave',
        lng='-121.876590',
        lat='37.325121',
        userId=2,
    )
    spot2 = Spot(
        name='Luxurious North Beach Flat',
        price=266,
        city='San Francisco',
        state='California',
        country='USA',
        address='7 North Point St',
        lng='-122.409091',
        lat='37.806952',
        userId=3,
    )
    spot3 = Spot(
        name='The Haven at Dillon Beach',
        price=350,
        city='Santa Rosa',
        state='California',
        country='USA',
        address='80 Ocean View Ave',
        lng='-122.966569',
        lat='38.251407',
        userId=4,
    )
    spot4 = Spot(
        name='✦Relax in the Heart of Sunny LA✦ ',
        price=399,
        city='Los Angeles',
        state='California',
        country='USA',
        address='2303 S Dunsmuir Ave',
        lng='-118.3577474',
        lat='34.0372129',
        userId=5,
    )
    spot5 = Spot(
        name='Modern Santa Monica Beach Home with Views',
        price=899,
        city='Santa Monica',
        state='California',
        country='USA',
        address='315 Montana Ave',
        lng='-118.4961643',
        lat='34.0212954',
        userId=6,
    )
    spot6 = Spot(
        name='The Bamboo: Dtwn Long Beach',
        price=630,
        city='Long Beach',
        state='California',
        country='USA',
        address='720 W 4th St',
        lng='-118.200818',
        lat='33.772059',
        userId=7,
    )
    spot7 = Spot(
        name='Modern apartment with Space Needle view',
        price=110,
        city='Seattle',
        state='California',
        country='USA',
        address='1250 John St',
        lng='-122.331459',
        lat='47.619666',
        userId=8,
    )
    spot8 = Spot(
        name='Name8',
        price=1525,
        city='Half Moon Bay',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=9,
    )
    spot9 = Spot(
        name='Modern apartment with Space Needle view',
        price=110,
        city='Seattle',
        state='Washington',
        country='USA',
        address='1250 John St',
        lng='-122.331459',
        lat='47.619666',
        userId=1,
    )
    spot10 = Spot(
        name='Beautifully Decorated, Comfortable, Beachfront 3 Bedroom House on Gulf Beach',
        price=588,
        city='Dauphin Island',
        state='Alabama',
        country='USA',
        address='2836 Bienville Blvd',
        lng='-88.1901566',
        lat='30.2477882',
        userId=1,
    )
    spot11 = Spot(
        name='Architectural Masterpiece | Best View in Telluride
',
        price=1025,
        city='Telluride',
        state='Colorado',
        country='USA',
        address='143 Sunset Cir',
        lng='-107.881283',
        lat='37.9255997',
        userId=1,
    )
    spot12 = Spot(
        name='Newest Simple Survival Earthship Studio',
        price=122,
        city='Taos County',
        state='New Mexico',
        country='USA',
        address='2 Earthship Way',
        lng='-105.7513587',
        lat='36.4949706',
        userId=1,
    )
    spot13 = Spot(
        name='Luxury Home★Amazing Yard★Firepit★2 Rooftop Decks',
        price=488,
        city='Pittsburgh',
        state='Pennsylvania',
        country='USA',
        address='1643 Watson St',
        lng='-79.982679',
        lat='40.438037',
        userId=1,
    )
    spot14 = Spot(
        name='Luxury Loft Oasis in Soho',
        price=800,
        city='New Yor',
        state='New York',
        country='USA',
        address='1335 6th Ave',
        lng='-73.978905',
        lat='40.763368',
        userId=1,
    )
    spot15 = Spot(
        name='Name15',
        price=100,
        city='San Jose',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=2,
    )
    spot16 = Spot(
        name='Name16',
        price=100,
        city='San Jose',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=3,
    )
    spot17 = Spot(
        name='Name17',
        price=100,
        city='San Jose',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=4,
    )
    spot18 = Spot(
        name='Name18',
        price=100,
        city='San Jose',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=5,
    )
    spot19 = Spot(
        name='Name19',
        price=100,
        city='San Jose',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=6,
    )
    spot20 = Spot(
        name='Name20',
        price=100,
        city='San Jose',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=7,
    )


    db.session.add(spot1)
    db.session.add(spot2)
    db.session.add(spot3)
    db.session.add(spot4)
    db.session.add(spot5)
    db.session.add(spot6)
    db.session.add(spot7)
    db.session.add(spot8)
    db.session.add(spot9)
    db.session.add(spot10)
    db.session.add(spot11)
    db.session.add(spot12)
    db.session.add(spot13)
    db.session.add(spot14)
    db.session.add(spot15)
    db.session.add(spot16)
    db.session.add(spot17)
    db.session.add(spot18)
    db.session.add(spot19)
    db.session.add(spot20)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_spots():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()
