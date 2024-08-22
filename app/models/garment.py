from datetime import datetime

from flask_login import UserMixin
from werkzeug.security import check_password_hash, generate_password_hash

from .db import SCHEMA, add_prefix_for_prod, db, environment


class Garment(db.Model, UserMixin):
    __tablename__ = "garments"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False
    )
    title = db.Column(db.String(200), nullable=False, unique=True)
    price = db.Column(db.Numeric(10, 2), nullable=False)
    discounted_price = db.Column(db.Numeric(10, 2), nullable=True)
    description = db.Column(db.Text, nullable=False)
    inventory = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String(7), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now)

    user = db.relationship("User", back_populates="garments")

    images = db.relationship(
        "GarmentImage", back_populates="garment", cascade="all, delete-orphan"
    )

    reviews = db.relationship(
        "Review", back_populates="garment", cascade="all, delete-orphan"
    )

    cart_items = db.relationship(
        "CartItem", back_populates="garment", cascade="all, delete-orphan"
    )

    favorites = db.relationship(
        "Favorite", back_populates="garment", cascade="all, delete-orphan"
    )

    def to_dict(self):
        preview_image_url = None

        preview_image = list(filter(lambda image: image.preview is True, self.images))

        if preview_image:
            preview_image_url = preview_image[0].url

        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "price": self.price,
            "discounted_price": self.discounted_price,
            "description": self.description,
            "inventory": self.inventory,
            "category": self.category,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "preview_image_url": preview_image_url,
        }
