from flask.cli import AppGroup
from .users import seed_users, undo_users
from .spots import seed_spots, undo_spots
from .bookings import seed_bookings, undo_bookings
from .reviews import seed_reviews, undo_reviews
from .images import seed_images, undo_images

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_spots()
    seed_bookings()
    seed_reviews()
    seed_images()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_spots()
    undo_bookings()
    undo_reviews()
    undo_images()
    # Add other undo functions here
