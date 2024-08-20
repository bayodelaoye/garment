from datetime import datetime

from flask_login import UserMixin
from werkzeug.security import check_password_hash, generate_password_hash

from .db import SCHEMA, add_prefix_for_prod, db, environment


class GarmentImage(db.Model, UserMixin):
    __tablename__ = "garment_images"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    garment_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("garments.id")), nullable=False
    )
    url = db.Column(db.Text, nullable=False)
    preview = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now)

    def to_dict(self):
        return {
            "id": self.id,
            "garment_id": self.garment_id,
            "url": self.url,
            "preview": self.preview,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }
