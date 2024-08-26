import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./GarmentCurrentPage.css";
import Loading from "../Loading";
import GarmentCurrentIndex from "./GarmentCurrentIndex";
import { obtainUserGarments } from "../../redux/garment";

function GarmentCurrentPage() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const userGarments = useSelector(
    (state) => state.garments?.userGarments?.garments
  );

  useEffect(() => {
    let timer;
    const fetchGarments = async () => {
      await dispatch(obtainUserGarments());
    };

    fetchGarments().then(() => {
      timer = setTimeout(() => setIsLoaded(true), 700);
    });

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      {isLoaded ? (
        <div className="user-garments-page-container">
          <h2>User's Created Garments</h2>

          <div className="create-garment-btn-container">
            <button>Create New Garment</button>
          </div>

          {userGarments?.length === 0 ? (
            <h2 className="no-favorites-text">
              Oh No! You don't have any created garments!
            </h2>
          ) : (
            <div className="garment-container">
              {userGarments?.map((garment, index) => {
                return <GarmentCurrentIndex garment={garment} key={index} />;
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

export default GarmentCurrentPage;
