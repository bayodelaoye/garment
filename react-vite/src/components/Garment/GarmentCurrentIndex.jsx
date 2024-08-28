import { Link, Navigate, useNavigate } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import { useModal } from "../../context/Modal";
import DeleteGarment from "./DeleteGarment";

function GarmentCurrentIndex({ garment }) {
  const { closeModal } = useModal();
  const navigate = useNavigate();

  return (
    <div className="individual-garment-container-with-btns">
      <div className="individual-garment-container">
        <Link
          to={`/garments/${garment.id}`}
          className="individual-garment-link"
        >
          <img
            src={garment.preview_image_url}
            alt="mens garment"
            className="index-preview-image"
          />
          <p>{garment.title}</p>
          <div className="price-container">
            <p className="discounted-price">${garment.discounted_price}</p>
            <p className="price">${garment.price}</p>
          </div>
        </Link>
      </div>
      <div className="user-garments-edit-delete-btn-container">
        <button
          className="user-garments-edit-delete-btn"
          onClick={() => navigate(`/garments/${garment.id}/edit`)}
        >
          Edit
        </button>
        <OpenModalButton
          buttonText={`Delete`}
          onClose={closeModal}
          className="user-garments-edit-delete-btn"
          modalComponent={<DeleteGarment garment={garment} />}
        />
      </div>
    </div>
  );
}

export default GarmentCurrentIndex;
