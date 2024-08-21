from flask import Blueprint, request
from flask_login import current_user, login_required

from app.aws import get_unique_filename, upload_file_to_s3
from app.models import Garment, GarmentImage, db

garment_routes = Blueprint("garments", __name__)


@garment_routes.route("/new", methods=["POST"])
@login_required
def new_garment():
    garment_info = request.get_json()

    if len(garment_info["title"]) > 30:
        return {"message": "Length of title exceeds more than 30 characters"}, 400

    garment_already_exists = Garment.query.filter(
        Garment.title == garment_info["title"]
    ).first()

    if garment_already_exists:
        return {"message": "Garment with that title already exists"}, 400

    new_garment = Garment(
        user_id=current_user.get_id(),
        title=garment_info["title"],
        price=garment_info["price"],
        discounted_price=garment_info["discounted_price"],
        description=garment_info["description"],
        inventory=garment_info["inventory"],
        category=garment_info["category"],
    )
    db.session.add(new_garment)
    db.session.commit()

    garment = Garment.query.filter(Garment.title == garment_info["title"]).first()

    if "image" in request.files:
        image = request.files["image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        if "url" not in upload:
            return {"message": "There was an error uploading the image"}, 500

    new_garment_image = GarmentImage(
        garment_id=garment.id, url=upload["url"], preview=garment_info["preview"]
    )
    db.session.add(new_garment_image)
    db.session.commit()

    return {"garment": garment.to_dict()}


@garment_routes.route("/")
def all_garments():
    garments = Garment.query.all()
    return {"garments": [garment.to_dict() for garment in garments]}


@garment_routes.route("/men")
def all_garments_men():
    garments = Garment.query.filter(Garment.category == "MEN").all()
    return {"garments": [garment.to_dict() for garment in garments]}


@garment_routes.route("/women")
def all_garments_women():
    garments = Garment.query.filter(Garment.category == "WOMEN").all()
    return {"garments": [garment.to_dict() for garment in garments]}


@garment_routes.route("/kids")
def all_garments_kids():
    garments = Garment.query.filter(Garment.category == "KIDS").all()
    return {"garments": [garment.to_dict() for garment in garments]}


@garment_routes.route("/<int:id>")
def garment_details(id):
    garment = Garment.query.get(id)
    return garment.to_dict()


@garment_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_garment(id):
    garment = Garment.query.get(id)

    if garment.user_id != current_user.id:
        return {"message": "Unauthorized"}, 403

    db.session.delete(garment)
    db.session.commit()
    return {"message": "Garment deleted"}
