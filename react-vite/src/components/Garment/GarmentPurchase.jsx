import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { removeCart } from "../../redux/cart";
import { obtainCartItems } from "../../redux/cart";
import { obtainAmountCartItems } from "../../redux/cart";

function GarmentPurchase() {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePurchase = async () => {
    await dispatch(removeCart());
    await dispatch(obtainCartItems());
    await dispatch(obtainAmountCartItems());
    closeModal();
    navigate("/");
  };

  return (
    <div className="order-confirmation-container">
      <h2>Order Confirmation</h2>
      <p>Thank you for your purchase!</p>
      <div className="">
        <p>
          "Fashion is not something that exists in dresses only. Fashion is in
          the sky, in the street, fashion has to do with ideas, the way we live,
          what is happening."
        </p>
        <p>-Coco Chanel</p>
      </div>
      <div className="continue-shopping-container">
        <button onClick={handlePurchase}>Continue Shopping</button>
      </div>
    </div>
  );
}

export default GarmentPurchase;
