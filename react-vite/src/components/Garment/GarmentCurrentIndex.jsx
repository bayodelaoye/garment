import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../../redux/favorite";
import { removeFavorite } from "../../redux/favorite";
import { obtainFavoriteGarments } from "../../redux/favorite";
import OpenModalButton from "../OpenModalButton";
import { useModal } from "../../context/Modal";
import DeleteGarment from "./DeleteGarment";

function GarmentCurrentIndex({ garment }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const user = useSelector((store) => store.session?.user);
  const favorites = useSelector(
    (state) => state.favorites?.favorites?.favorites
  );
  const userFavorites = favorites?.filter((fav) => {
    return fav?.user_id === user?.id;
  });
  const favoriteGarmentIds = new Set(
    userFavorites?.map((fav) => fav?.garment_id)
  );
  const isFavorite = favoriteGarmentIds.has(garment?.id);

  return (
    <div className="individual-garment-container-with-btns">
      <div className="individual-garment-container">
        <Link
          to={`/garments/${garment.id}`}
          className="individual-garment-link"
        >
          <img src={garment.preview_image_url} alt="mens garment" />
          <p>{garment.title}</p>
          <div className="price-container">
            <p className="discounted-price">${garment.discounted_price}</p>
            <p className="price">${garment.price}</p>
          </div>
        </Link>
      </div>
      <div className="user-garments-edit-delete-btn-container">
        <button className="user-garments-edit-delete-btn">Edit</button>
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
