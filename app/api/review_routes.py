from flask import Blueprint, request
from flask_login import current_user, login_required

from app.models import Garment, Review, db

review_routes = Blueprint("reviews", __name__)


@review_routes.route("/<int:garment_id>/new", methods=["POST"])
@login_required
def new_review(garment_id):
    review_info = request.get_json()

    if len(review_info["review"]) < 10:
        return {"message": "Length of review must be more than 10 characters long"}, 400

    new_review = Review(
        user_id=current_user.get_id(),
        garment_id=garment_id,
        review=review_info["review"],
        stars=review_info["stars"],
    )

    db.session.add(new_review)
    db.session.commit()

    return {"review": new_review.to_dict()}


@review_routes.route("/<int:garment_id>")
def all_reviews_for_garment(garment_id):
    garment = Garment.query.get(garment_id)

    if garment is None:
        return {"message": "Not found"}, 404

    reviews = Review.query.filter(Review.garment_id == garment_id).all()
    return {"reviews": [review.to_dict() for review in reviews]}


@review_routes.route("/<int:garment_id>", methods=["PUT"])
@login_required
def update_review(garment_id):
    review_info = request.get_json()
    review = review_info.get("review")
    stars = review_info.get("stars")
    user_review = Review.query.filter(
        Review.user_id == current_user.id, Review.garment_id == garment_id
    ).first()

    if user_review is None:
        return {"message": "Don't have a review for this garment"}, 404

    if review:
        if len(review) < 10:
            return {
                "message": "Length of review must be more than 10 characters long"
            }, 400
        user_review.review = review

    if stars is not None:
        user_review.stars = stars

    db.session.commit()

    return {"review": user_review.to_dict()}


@review_routes.route("/<int:garment_id>", methods=["DELETE"])
@login_required
def delete_review(garment_id):
    user_review = Review.query.filter(
        Review.user_id == current_user.id, Review.garment_id == garment_id
    ).first()

    if user_review is None:
        return {"message": "Don't have a review for this garment"}, 404

    db.session.delete(user_review)
    db.session.commit()
    return {"message": "Review deleted"}
