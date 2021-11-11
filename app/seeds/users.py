from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():
    Shulk = User(
        name='Shulk',
        email='demo@aaa.io',
        password='password',
        bio="The wielder of the Monado from Colony 9. My life was simple and I was a researcher, until the Mechon attacked Colony 9. Many lives were lost that day and I set out to defeat the Mechon.",
        profile_pic="https://i.pinimg.com/236x/7b/3a/d1/7b3ad157f8d70b404fd2548c4497c2f6--xenoblade-chronicles-eye-candy.jpg",
        is_superhost=True
        )
    Fiora = User(
        name='Fiora',
        email='marnie@aaa.io',
        password='password',
        bio="Childhood friend to Shulk and Reyn I was kill but a faced Mechon and was reborn with a Mechon body to pilot a Face Unit. I had Meyneth's Monado within me that powered my body. I was finally brought back to my senses when I reunited with Shulk.",
        profile_pic="https://static.wikia.nocookie.net/xenoblade/images/b/b8/XCDE-Fiora_Portrait.png/revision/latest?cb=20200715014915",
        is_superhost=True
        )

    db.session.add(Shulk)
    db.session.add(Fiora)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
