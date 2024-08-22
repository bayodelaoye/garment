from flask import Blueprint, request
from flask_login import current_user, login_required

from app.models import Favorite, db

favorite_routes = Blueprint("favorites", __name__)


@favorite_routes.route("/", methods=["POST"])
@login_required
def add_to_favorites():
    favorite_info = request.get_json()
    garment_id = favorite_info.get("garment_id")

    favorited_already = Favorite.query.filter(
        Favorite.garment_id == garment_id, Favorite.user_id == current_user.id
    ).first()

    if favorited_already:
        return {"message": "Already favorited"}, 400

    new_favorite = Favorite(user_id=current_user.get_id(), garment_id=garment_id)

    db.session.add(new_favorite)
    db.session.commit()

    return {"favorite": new_favorite.to_dict()}, 200


@favorite_routes.route("/")
@login_required
def read_favorites():
    favorites = Favorite.query.filter(Favorite.user_id == current_user.id).all()

    if favorites is None:
        return {"message": "You have no favorites"}, 404

    return {"favorites": [favorite.to_dict() for favorite in favorites]}, 200


@favorite_routes.route("/<int:garment_id>", methods=["DELETE"])
@login_required
def delete_favorite(garment_id):
    favorite = Favorite.query.filter(
        Favorite.garment_id == garment_id, Favorite.user_id == current_user.id
    ).first()

    if favorite is None:
        return {"message": "Don't have a favorite with this garment id"}, 404

    db.session.delete(favorite)
    db.session.commit()
    return {"message": "Favorite item deleted"}, 200
