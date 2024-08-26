import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { removeGarment } from "../../redux/garment";
import { obtainUserGarments } from "../../redux/garment";

function DeleteGarment({ garment }) {
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(removeGarment(garment.id));
    await dispatch(obtainUserGarments());

    closeModal();
  };

  return (
    <form className="review-delete-keep-form" onSubmit={handleSubmit}>
      <h1 className="review-title">Delete Garment</h1>

      <p>Are you sure you want to delete this garment?</p>

      <div className="review-delete-keep-btn-container">
        <button className="review-delete-keep-btn" type="submit">
          Yes...Delete
        </button>
        <button
          className="review-delete-keep-btn"
          type="button"
          onClick={closeModal}
        >
          No, Keep
        </button>
      </div>
    </form>
  );
}

export default DeleteGarment;
