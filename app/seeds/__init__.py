from flask.cli import AppGroup

from app.models.db import SCHEMA, db, environment

from .favorites import seed_favorites, undo_favorites
from .garment_images import seed_garment_images, undo_garment_images
from .garments import seed_garments, undo_garments
from .reviews import seed_reviews, undo_reviews
from .users import seed_users, undo_users

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup("seed")


# Creates the `flask seed all` command
@seed_commands.command("all")
def seed():
    if environment == "production":
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_favorites()
        undo_reviews()
        undo_garment_images()
        undo_garments()
        undo_users()
    seed_users()
    seed_garments()
    seed_garment_images()
    seed_reviews()
    seed_favorites()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command("undo")
def undo():
    undo_favorites()
    undo_reviews()
    undo_garment_images()
    undo_garments()
    undo_users()
    # Add other undo functions here
