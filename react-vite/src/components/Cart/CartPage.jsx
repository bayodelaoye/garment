import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartPage.css";
import Loading from "../Loading";
import { removeCart } from "../../redux/cart";
import { obtainCartItems } from "../../redux/cart";
import { obtainAmountCartItems } from "../../redux/cart";
import CartItemIndex from "./CartItemIndex";
import OpenModalButton from "../OpenModalButton";
import { useModal } from "../../context/Modal";
import GarmentPurchase from "../Garment/GarmentPurchase";

function CartPage() {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [isLoaded, setIsLoaded] = useState(false);
  const cartItems = useSelector(
    (state) => state.cart?.cartItems?.cart?.cart_items
  );
  let total = 0;

  for (let i = 0; i < cartItems?.length; i++) {
    total += cartItems[i]?.quantity * cartItems[i]?.garment?.price;
  }

  useEffect(() => {
    let timer;
    const getCartItems = async () => {
      await dispatch(obtainCartItems());
    };

    getCartItems().then(() => {
      timer = setTimeout(() => setIsLoaded(true), 300);
    });

    return () => clearTimeout(timer);
  }, [dispatch]);

  const handleRemoveAllItems = async () => {
    await dispatch(removeCart());
    await dispatch(obtainCartItems());
    await dispatch(obtainAmountCartItems());
  };

  return (
    <>
      {isLoaded ? (
        <div className="cart-page-container">
          <h2 className="cart-page-title">Cart</h2>

          {cartItems?.length === 0 || cartItems === undefined ? (
            <h2 className="no-favorites-text">
              Oh no, there's nothing in your cart!
            </h2>
          ) : (
            <>
              <div>
                <div className="cart-item-headings-container">
                  <div className="cart-item-heading">Garment</div>
                  <div className="cart-item-heading">Title</div>
                  <div className="cart-item-heading">Price</div>
                  <div className="cart-item-heading">Quantity</div>
                  <div className="cart-item-heading">Total</div>
                  <div className="cart-item-heading">Remove</div>
                </div>

                <div className="individual-cart-item-container">
                  {cartItems?.map((cartItem, index) => {
                    return <CartItemIndex cartItem={cartItem} key={index} />;
                  })}
                </div>
              </div>

              <div className="clear-cart-container">
                <button onClick={handleRemoveAllItems}>Remove All Items</button>
              </div>

              <div className="cart-aggregate-container">
                <h2>Cart Aggregate</h2>
                <div className="fees-container">
                  <div className="total-shipping-container">
                    <p>Subtotal</p>
                    <p>{Number(total).toFixed(2)}</p>
                  </div>
                  <div className="total-shipping-container">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                  </div>
                  <div className="total-container">
                    <p>Total</p>
                    <p>{Number(total).toFixed(2)}</p>
                  </div>
                </div>
              </div>

              <div className="purchase-btn-container">
                <OpenModalButton
                  buttonText={`PURCHASE`}
                  // onClose={closeModal}
                  modalComponent={<GarmentPurchase />}
                />
              </div>
            </>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default CartPage;
