from flask import Blueprint, request
from flask_login import current_user, login_required

from app.aws import get_unique_filename, upload_file_to_s3
from app.models import Garment, GarmentImage, db

garment_routes = Blueprint("garments", __name__)


@garment_routes.route("/new", methods=["POST"])
@login_required
def new_garment():
    garment_info = {
        "title": request.form["title"],
        "price": request.form["price"],
        "discounted_price": request.form["discounted_price"],
        "description": request.form["description"],
        "inventory": request.form["inventory"],
        "category": request.form["category"],
    }

    if len(garment_info["title"]) > 35:
        return {"message": "Length of title exceeds more than 35 characters"}, 400

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

    return {"garment": new_garment.to_dict()}, 200


@garment_routes.route("/new/image", methods=["POST"])
@login_required
def new_garment_images():
    garment_info = {
        "title": request.form["title"],
    }

    garment = Garment.query.filter(Garment.title == garment_info["title"]).first()

    images = request.files.getlist("image")
    for index, image in enumerate(images):
        if image:
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)
            if "url" not in upload:
                return {"message": "There was an error uploading the image"}, 500

            new_garment_image = GarmentImage(
                garment_id=garment.id, url=upload["url"], preview=1 if index == 0 else 0
            )
            db.session.add(new_garment_image)

    db.session.commit()

    return {"message": "Created garment image"}, 200


@garment_routes.route("/")
def all_garments():
    garments = Garment.query.all()
    return {"garments": [garment.to_dict() for garment in garments]}, 200


@garment_routes.route("/user")
def all_user_garments():
    garments = Garment.query.filter(Garment.user_id == current_user.id).all()
    return {"garments": [garment.to_dict() for garment in garments]}, 200


@garment_routes.route("/men")
def all_garments_men():
    garments = Garment.query.filter(Garment.category == "MEN").all()
    return {"garments": [garment.to_dict() for garment in garments]}, 200


@garment_routes.route("/women")
def all_garments_women():
    garments = Garment.query.filter(Garment.category == "WOMEN").all()
    return {"garments": [garment.to_dict() for garment in garments]}, 200


@garment_routes.route("/kids")
def all_garments_kids():
    garments = Garment.query.filter(Garment.category == "KIDS").all()
    return {"garments": [garment.to_dict() for garment in garments]}, 200


@garment_routes.route("/<int:id>")
def garment_details(id):
    garment = Garment.query.get(id)
    return garment.to_dict(), 200


@garment_routes.route("/<int:id>/images")
def garment_images(id):
    garment_images = GarmentImage.query.filter(
        GarmentImage.garment_id == id, GarmentImage.preview == False
    ).all()
    return [garment_image.to_dict() for garment_image in garment_images], 200


@garment_routes.route("/<int:id>/edit", methods=["PUT"])
@login_required
def update_garment(id):
    garment_info = {
        "title": request.form["title"],
        "price": request.form["price"],
        "discounted_price": request.form["discounted_price"],
        "description": request.form["description"],
        "inventory": request.form["inventory"],
        "category": request.form["category"],
    }

    garment = Garment.query.get(id)

    if len(garment_info["title"]) > 50:
        return {"message": "Length of title exceeds more than 50 characters"}, 400

    garment.title = garment_info["title"]
    garment.price = garment_info["price"]
    garment.discounted_price = garment_info["discounted_price"]
    garment.description = garment_info["description"]
    garment.inventory = garment_info["inventory"]
    garment.category = garment_info["category"]

    db.session.commit()

    return {"garment": garment.to_dict()}, 200


@garment_routes.route("/<int:id>/edit/images", methods=["PUT"])
@login_required
def update_garment_images(id):
    garment_images = GarmentImage.query.filter(GarmentImage.garment_id == id).all()

    images = request.files.getlist("image")
    for index, image in enumerate(images):
        if image:
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)
            if "url" not in upload:
                return {"message": "There was an error uploading the image"}, 500

            garment_images[index].url = upload["url"]

    db.session.commit()

    return {"message": "Updated garment images"}, 200


@garment_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_garment(id):
    garment = Garment.query.get(id)

    if garment.user_id != current_user.id:
        return {"message": "Unauthorized"}, 403

    db.session.delete(garment)
    db.session.commit()
    return {"message": "Garment deleted"}, 200
