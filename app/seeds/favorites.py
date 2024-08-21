from sqlalchemy.sql import text

from app.models import SCHEMA, Favorite, db, environment


# Adds a demo user, you can add other users here if you want
def seed_favorites():
    for favorite in [
        {"user_id": 1, "garment_id": 1},
        {"user_id": 1, "garment_id": 5},
        {"user_id": 1, "garment_id": 9},
    ]:
        db.session.add(Favorite(**favorite))
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_favorites():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.favorites RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM favorites"))

    db.session.commit()
