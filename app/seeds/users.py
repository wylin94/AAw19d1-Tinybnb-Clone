from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', profile_pic='https://vuesax.com/avatars/avatar-3.png')
    leona = User(
        username='leona', email='leona@aa.io', password='password-1', profile_pic='https://vuesax.com/avatars/avatar-1.png')
    janet = User(
        username='janet', email='janet@aa.io', password='password-2', profile_pic='https://vuesax.com/avatars/avatar-2.png')
    hanna = User(
        username='hanna', email='hanna@aa.io', password='password-4', profile_pic='https://vuesax.com/avatars/avatar-4.png')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password-5', profile_pic='https://vuesax.com/avatars/avatar-5.png')
    liam = User(
        username='liam', email='liam@aa.io', password='password-6', profile_pic='https://vuesax.com/avatars/avatar-6.png')
    oliver = User(
        username='oliver', email='oliver@aa.io', password='password-7', profile_pic='https://vuesax.com/avatars/avatar-7.png')
    Lucas = User(
        username='Lucas', email='Lucas@aa.io', password='password-8', profile_pic='https://vuesax.com/avatars/avatar-8.png')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password-9', profile_pic='https://vuesax.com/avatars/avatar-9.png')

    db.session.add(demo)
    db.session.add(leona)
    db.session.add(janet)
    db.session.add(hanna)
    db.session.add(marnie)
    db.session.add(liam)
    db.session.add(oliver)
    db.session.add(Lucas)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
