import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../../redux/favorite";
import { removeFavorite } from "../../redux/favorite";
import { obtainFavoriteGarments } from "../../redux/favorite";

function GarmentIndex({ garment }) {
  const dispatch = useDispatch();
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

  console.log(userFavorites);

  const toggleFavorite = async () => {
    if (isFavorite) {
      await dispatch(removeFavorite(garment.id));
    } else {
      await dispatch(addFavorite(garment.id));
    }
    await dispatch(obtainFavoriteGarments());
  };

  return (
    <div className="individual-garment-container">
      <Link to={`/garments/${garment.id}`} className="individual-garment-link">
        <img src={garment.preview_image_url} alt="mens garment" />
        <p>{garment.title}</p>
        <div className="price-container">
          <p className="discounted-price">${garment.discounted_price}</p>
          <p className="price">${garment.price}</p>
        </div>
      </Link>
      {user ? (
        <>
          {isFavorite ? (
            <FaHeart
              className="heart-icon favorite-selected"
              onClick={toggleFavorite}
            />
          ) : (
            <FaRegHeart className="heart-icon" onClick={toggleFavorite} />
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default GarmentIndex;
