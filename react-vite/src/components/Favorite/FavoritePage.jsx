import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainFavoriteGarments } from "../../redux/favorite";
import { obtainGarmentsAll } from "../../redux/garment";
import GarmentIndex from "../Garment/GarmentIndex";
import "../Garment/GarmentPage.css";
import Loading from "../Loading";

function FavoritePage() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const favorites = useSelector(
    (state) => state.favorites?.favorites?.favorites
  );
  const allGarments = useSelector(
    (state) => state.garments?.allGarments?.garments
  );
  const favoriteGarmentIds = new Set(favorites?.map((fav) => fav.garment_id));
  const favoriteGarments = allGarments?.filter((garment) =>
    favoriteGarmentIds.has(garment.id)
  );

  console.log(favorites);
  useEffect(() => {
    let timer;
    const fetchGarments = async () => {
      await dispatch(obtainFavoriteGarments());
      await dispatch(obtainGarmentsAll());
    };

    fetchGarments().then(() => {
      timer = setTimeout(() => setIsLoaded(true), 700);
    });

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      {isLoaded ? (
        <div className="category-page-container">
          <h2 className="category-page-title">Favorites Garments</h2>

          {favorites?.length === 0 ? (
            <h2 className="no-favorites-text">
              Oh No! You don't have any favorites!
            </h2>
          ) : (
            <div className="garment-container">
              {favoriteGarments?.map((garment, index) => {
                return <GarmentIndex garment={garment} key={index} />;
              })}
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default FavoritePage;
