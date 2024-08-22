from datetime import datetime

from flask_login import UserMixin
from werkzeug.security import check_password_hash, generate_password_hash

from .db import SCHEMA, add_prefix_for_prod, db, environment


class CartItem(db.Model, UserMixin):
    __tablename__ = "cart_items"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    cart_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("cart.id")), nullable=False
    )
    garment_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("garments.id")), nullable=False
    )
    quantity = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now)

    garment = db.relationship("Garment", back_populates="cart_items")

    cart = db.relationship("Cart", back_populates="cart_items")

    def to_dict(self):
        return {
            "id": self.id,
            "cart_id": self.cart_id,
            "garment_id": self.garment_id,
            "quantity": self.quantity,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }

    def to_dict_with_garments(self):
        return {
            "id": self.id,
            "cart_id": self.cart_id,
            "garment_id": self.garment_id,
            "quantity": self.quantity,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "garment": self.garment.to_dict(),
        }
