import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./GarmentCurrentPage.css";
import Loading from "../Loading";
import GarmentCurrentIndex from "./GarmentCurrentIndex";
import { obtainUserGarments } from "../../redux/garment";
import { useNavigate } from "react-router-dom";

function GarmentCurrentPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      timer = setTimeout(() => setIsLoaded(true), 300);
    });

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      {isLoaded ? (
        <div className="user-garments-page-container">
          <h2 className="user-garments-page-title">User's Created Garments</h2>

          <div className="create-garment-btn-container">
            <button onClick={() => navigate("/garments/new")}>
              Create New Garment
            </button>
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
