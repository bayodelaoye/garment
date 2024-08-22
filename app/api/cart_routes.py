from flask import Blueprint, request
from flask_login import current_user, login_required

from app.models import Cart, CartItem, Garment, db

cart_routes = Blueprint("cart", __name__)


@cart_routes.route("/", methods=["POST"])
@login_required
def add_to_cart():
    cart_info = request.get_json()
    user_cart = Cart.query.filter(Cart.user_id == current_user.id).first()
    garment = Garment.query.get(cart_info["garment_id"])

    if user_cart is None:
        new_cart = Cart(user_id=current_user.get_id())
        db.session.add(new_cart)
        db.session.commit()
        user_cart = new_cart

    cart_item = CartItem.query.filter(
        CartItem.garment_id == garment.id, CartItem.cart_id == user_cart.id
    ).first()

    if cart_item:
        cart_item.quantity += 1
    else:
        new_cart_item = CartItem(
            cart_id=user_cart.id, garment_id=garment.id, quantity=1
        )
        db.session.add(new_cart_item)
    db.session.commit()

    return {"message": "Added item to cart"}, 200


@cart_routes.route("/")
@login_required
def read_cart_items_in_cart():
    cart = Cart.query.filter(Cart.user_id == current_user.id).first()

    if cart is None:
        return {"message": "There are no items in your cart"}, 404

    return {"cart": cart.to_dict_with_cart_items()}, 200


@cart_routes.route("/<int:cart_item_id>", methods=["PUT"])
@login_required
def update_cart_item_quantity(cart_item_id):
    cart_info = request.get_json()
    quantity = cart_info.get("quantity")
    cart_item = CartItem.query.get(cart_item_id)

    if quantity is not None:
        cart_item.quantity = quantity

    db.session.commit()

    return {"cart": cart_item.to_dict_with_garments()}, 200


@cart_routes.route("/<int:cart_item_id>", methods=["DELETE"])
@login_required
def delete_cart_item(cart_item_id):
    cart_item = CartItem.query.get(cart_item_id)

    if cart_item is None:
        return {"message": "Cart item not found"}, 404

    db.session.delete(cart_item)
    db.session.commit()

    return {"message": "Cart item deleted"}, 200


@cart_routes.route("/", methods=["DELETE"])
@login_required
def delete_cart():
    user_cart = Cart.query.filter(Cart.user_id == current_user.id).first()

    if user_cart is None:
        return {"message": "Don't have a cart to delete"}, 404

    db.session.delete(user_cart)
    db.session.commit()
    return {"message": "Cart and cart items deleted"}, 200
