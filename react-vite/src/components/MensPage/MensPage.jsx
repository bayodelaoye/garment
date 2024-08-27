import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainGarmentsMen } from "../../redux/garment";
import GarmentIndex from "../Garment/GarmentIndex";
import "../Garment/GarmentPage.css";
import Loading from "../Loading";

function MensPage() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const menGarments = useSelector(
    (state) => state.garments?.garmentsMen?.garments
  );

  useEffect(() => {
    let timer;
    const getGarmentsMen = async () => {
      await dispatch(obtainGarmentsMen());
    };

    getGarmentsMen().then(() => {
      timer = setTimeout(() => setIsLoaded(true), 300);
    });

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      {isLoaded ? (
        <div className="category-page-container">
          <h2 className="category-page-title">Mens' Garments</h2>

          <div className="garment-container">
            {menGarments?.map((garment, index) => {
              return <GarmentIndex garment={garment} key={index} />;
            })}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default MensPage;
