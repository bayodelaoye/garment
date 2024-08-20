from datetime import datetime

from flask_login import UserMixin
from werkzeug.security import check_password_hash, generate_password_hash

from .db import SCHEMA, add_prefix_for_prod, db, environment


class Favorite(db.Model, UserMixin):
    __tablename__ = "favorites"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False
    )
    garment_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("garments.id")), nullable=False
    )
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now)

    user = db.relationship("User", back_populates="favorites")

    garment = db.relationship("Garment", back_populates="favorites")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "garment_id": self.garment_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }
