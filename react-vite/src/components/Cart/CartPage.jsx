import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartPage.css";
import Loading from "../Loading";
import { obtainCartItems } from "../../redux/cart";
import CartItemIndex from "./CartItemIndex";

function CartPage() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(true);
  const cartItems = useSelector(
    (state) => state.cart?.cartItems?.cart?.cart_items
  );

  useEffect(() => {
    let timer;
    const getCartItems = async () => {
      await dispatch(obtainCartItems());
    };

    getCartItems().then(() => {
      timer = setTimeout(() => setIsLoaded(true), 700);
    });

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      {isLoaded ? (
        <div className="cart-page-container">
          <h2 className="cart-page-title">Cart</h2>

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
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default CartPage;
