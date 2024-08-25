import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { editCart } from "../../redux/cart";
import { obtainCartItems } from "../../redux/cart";
import { removeCartItem } from "../../redux/cart";
import { obtainAmountCartItems } from "../../redux/cart";

function CartItemIndex({ cartItem }) {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = async () => {
    await dispatch(
      editCart({ quantity: cartItem?.quantity + 1, cartItemId: cartItem?.id })
    );
    await dispatch(obtainCartItems());
  };

  const handleDecreaseQuantity = async () => {
    await dispatch(
      editCart({ quantity: cartItem?.quantity - 1, cartItemId: cartItem?.id })
    );
    await dispatch(obtainCartItems());
  };

  const handleRemoveItem = async () => {
    await dispatch(removeCartItem(cartItem?.id));
    await dispatch(obtainCartItems());
    await dispatch(obtainAmountCartItems());
  };

  return (
    <div className="cart-item-container">
      <div className="cart-item-detail">
        <img src={cartItem?.garment?.preview_image_url} alt="Garment image" />
      </div>

      <div className="cart-item-detail">
        <p>{cartItem?.garment?.title}</p>
      </div>

      <div className="cart-item-detail">
        <p>{cartItem?.garment?.price}</p>
      </div>

      <div className="cart-item-detail">
        <div className="update-quantity-container">
          {cartItem?.quantity > 1 ? (
            <FaMinus
              onClick={handleDecreaseQuantity}
              className="update-quantity"
            />
          ) : (
            <></>
          )}
          <p>{cartItem?.quantity}</p>
          <FaPlus
            onClick={handleIncreaseQuantity}
            className="update-quantity"
          />
        </div>
      </div>

      <div className="cart-item-detail">
        <p>
          ${Number(cartItem?.garment?.price * cartItem?.quantity).toFixed(2)}
        </p>
      </div>

      <div className="cart-item-detail">
        <button onClick={handleRemoveItem}>Remove</button>
      </div>
    </div>
  );
}

export default CartItemIndex;
