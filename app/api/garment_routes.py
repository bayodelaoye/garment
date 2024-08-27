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

    if len(garment_info["title"]) > 50:
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
            print(new_garment_image)
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
    garment_info = request.get_json()
    garment = Garment.query.get(id)
    title = garment_info.get("title")
    price = garment_info.get("price")
    discounted_price = garment_info.get("discounted_price")
    description = garment_info.get("description")
    inventory = garment_info.get("inventory")

    if garment is None:
        return {"message": "Not found"}, 404

    if garment.user_id != current_user.id:
        return {"message": "Unauthorized"}, 403

    # Check if user inputted the values to edit
    if title:
        if len(title) > 30:
            return {"message": "Length of title exceeds more than 30 characters"}, 400
        garment_already_exists = Garment.query.filter(Garment.title == title).first()
        if garment_already_exists:
            return {"message": "Garment with that title already exists"}, 400
        garment.title = title

    if price is not None:
        if price < 0:
            return {"message": "Price cannot be a negative number"}, 400
        garment.price = price

    if discounted_price is not None:
        if discounted_price < 0:
            return {"message": "Discounted price cannot be a negative number"}, 400
        garment.discounted_price = discounted_price

    if description:
        if len(description) < 100:
            return {"message": "Description must be 100 characters or more"}, 400
        garment.description = description

    if inventory is not None:
        if inventory < 0:
            return {"message": "Inventory amount cannot be a negative number"}, 400
        garment.inventory = inventory

    # Handle file upload if the image is provided
    if "image" in request.files:
        image = request.files["image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        if "url" not in upload:
            return {"message": "There was an error uploading the image"}, 500

    garment_image = GarmentImage.query.filter(
        GarmentImage.garment_id == garment.id
    ).first()

    if garment_image:
        garment_image.url = upload["url"]
    db.session.commit()

    return {"garment": garment.to_dict()}, 200


@garment_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_garment(id):
    garment = Garment.query.get(id)

    if garment.user_id != current_user.id:
        return {"message": "Unauthorized"}, 403

    db.session.delete(garment)
    db.session.commit()
    return {"message": "Garment deleted"}, 200
