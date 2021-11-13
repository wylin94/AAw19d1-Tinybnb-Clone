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
        description='Located a half mile from the heart of Downtown this property offers convenience and flexibility to all of Silicon Valley. Efficiently designed, modern and spacious, this junior one bedroom has an open kitchen and beautiful sliding glass doors. Walk in bedroom closet as well as coat closet/pantry. In unit washer and dryer. Pets allowed. One reserved parking space conveniently located just below the home in the gated underground garage is included.',
        spot_type="Condo",
        num_bedrooms=1,
        num_baths=1,
        num_beds=1,
        total_guests=2,
        city='San Jose',
        state='California',
        country='USA',
        address='800 5th Ave',
        lng='-121.876590',
        lat='37.325121',
        userId=1,
    )
    spot2 = Spot(
        name='Luxurious North Beach Flat',
        price=266,
        description='We would love to share our wonderful SF home with you! Our place is close to Fishermans Wharf, Washington Square Park, North Beach, Chinatown, Financial District. Fantastic walking score, but also immediate access to public transportation, including the famous Cable Cars. Our place is good for couples, solo adventurers, business travelers, small groups and families.',
        spot_type="Condo",
        num_bedrooms=1,
        num_baths=1,
        num_beds=2,
        total_guests=3,
        city='San Francisco',
        state='California',
        country='USA',
        address='7 North Point St',
        lng='-122.409091',
        lat='37.806952',
        userId=1,
    )
    spot3 = Spot(
        name='The Haven at Dillon Beach',
        price=350,
        description='The Haven at Dillon Beach. Its a great place to relax, listen to the surf and enjoy the views of Point Reyes. 300 Yards to the Beach. A great garden; Ocean views from nearly every window; gourmet kitchen; Turkish cotton towels; clawfoot tub for the romantic in you. Peace and serenity. Its my happy place. I hope to share it with you.',
        spot_type="Cabin",
        num_bedrooms=3,
        num_baths=2,
        num_beds=4,
        total_guests=6,
        city='Santa Rosa',
        state='California',
        country='USA',
        address='80 Ocean View Ave',
        lng='-122.966569',
        lat='38.251407',
        userId=2,
    )
    spot4 = Spot(
        name='✦Relax in the Heart of Sunny LA✦ ',
        price=399,
        description='Feel comfortable and unwind at our place. The location is so central to everything in LA, its perfect for: the wandering traveler, food enthusiasts, working men/women, music junkie, and art scavengers.',
        spot_type="House",
        num_bedrooms=4,
        num_baths=5,
        num_beds=4,
        total_guests=8,
        city='Los Angeles',
        state='California',
        country='USA',
        address='2303 S Dunsmuir Ave',
        lng='-118.3577474',
        lat='34.0372129',
        userId=2,
    )
    spot5 = Spot(
        name='Modern Santa Monica Beach Home with Views',
        price=899,
        description='Gorgeous new construction state-of-the-art masterpiece steps from the beach. 5,000 square ft of absolutely stunning, luxury new construction is a seashore adjacent fantasy come true. Sleek and modern, this home is minimalist in design yet abundant in warmth and luxury. Rooftop deck with ocean view, hot tub and firepit! One block walk to restaurants, bars, clubs, shopping and of course world famous Santa Monica Beach! Sleeps up to 12 lucky guests! 5 Bedrooms, 6 bathrooms + yoga / playroom.',
        spot_type="Beach House",
        num_bedrooms=5,
        num_baths=6,
        num_beds=8,
        total_guests=10,
        city='Santa Monica',
        state='California',
        country='USA',
        address='315 Montana Ave',
        lng='-118.4961643',
        lat='34.0212954',
        userId=3,
    )
    spot6 = Spot(
        name='Name6',
        price=630,
        description='This a test location, this should work.',
        spot_type="Beach House",
        num_bedrooms=3,
        num_baths=2,
        num_beds=4,
        total_guests=6,
        city='Long Beach',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=3,
    )
    spot7 = Spot(
        name='Name7',
        price=200,
        description='This a test location, this should work.',
        spot_type="Tree House",
        num_bedrooms=1,
        num_baths=1,
        num_beds=2,
        total_guests=3,
        city='San Diego',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=4,
    )
    spot8 = Spot(
        name='Name8',
        price=1525,
        description='This a test location, this should work.',
        spot_type="Villa",
        num_bedrooms=7,
        num_baths=6,
        num_beds=7,
        total_guests=15,
        city='Half Moon Bay',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=4,
    )
    spot9 = Spot(
        name='Name9',
        price=400,
        description='This a test location, this should work.',
        spot_type="House",
        num_bedrooms=5,
        num_baths=3,
        num_beds=3,
        total_guests=7,
        city='Napa',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=5,
    )
    spot10 = Spot(
        name='Name10',
        price=280,
        description='This a test location, this should work.',
        spot_type="House",
        num_bedrooms=3,
        num_baths=3,
        num_beds=2,
        total_guests=5,
        city='Sacramento',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=5,
    )
    spot11 = Spot(
        name='Name11',
        price=100,
        description='This a test location, this should work.',
        spot_type="House",
        num_bedrooms=1,
        num_baths=1,
        num_beds=2,
        total_guests=3,
        city='San Jose',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=6,
    )
    spot12 = Spot(
        name='Name12',
        price=100,
        description='This a test location, this should work.',
        spot_type="House",
        num_bedrooms=1,
        num_baths=1,
        num_beds=2,
        total_guests=3,
        city='San Jose',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=6,
    )
    spot13 = Spot(
        name='Name13',
        price=100,
        description='This a test location, this should work.',
        spot_type="House",
        num_bedrooms=1,
        num_baths=1,
        num_beds=2,
        total_guests=3,
        city='San Jose',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=7,
    )
    spot14 = Spot(
        name='Name14',
        price=100,
        description='This a test location, this should work.',
        spot_type="House",
        num_bedrooms=1,
        num_baths=1,
        num_beds=2,
        total_guests=3,
        city='San Jose',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=7,
    )
    spot15 = Spot(
        name='Name15',
        price=100,
        description='This a test location, this should work.',
        spot_type="House",
        num_bedrooms=1,
        num_baths=1,
        num_beds=2,
        total_guests=3,
        city='San Jose',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=8,
    )
    spot16 = Spot(
        name='Name16',
        price=100,
        description='This a test location, this should work.',
        spot_type="House",
        num_bedrooms=1,
        num_baths=1,
        num_beds=2,
        total_guests=3,
        city='San Jose',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=8,
    )
    spot17 = Spot(
        name='Name17',
        price=100,
        description='This a test location, this should work.',
        spot_type="House",
        num_bedrooms=1,
        num_baths=1,
        num_beds=2,
        total_guests=3,
        city='San Jose',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=9,
    )
    spot18 = Spot(
        name='Name18',
        price=100,
        description='This a test location, this should work.',
        spot_type="House",
        num_bedrooms=1,
        num_baths=1,
        num_beds=2,
        total_guests=3,
        city='San Jose',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=9,
    )
    spot19 = Spot(
        name='Name19',
        price=100,
        description='This a test location, this should work.',
        spot_type="House",
        num_bedrooms=1,
        num_baths=1,
        num_beds=2,
        total_guests=3,
        city='San Jose',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=10,
    )
    spot20 = Spot(
        name='Name20',
        price=100,
        description='This a test location, this should work.',
        spot_type="House",
        num_bedrooms=1,
        num_baths=1,
        num_beds=2,
        total_guests=3,
        city='San Jose',
        state='California',
        country='USA',
        address='123 Test Ave, San Jose, CA 94088',
        lng='-122.00983107099384',
        lat='37.561299565623536',
        userId=10,
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
