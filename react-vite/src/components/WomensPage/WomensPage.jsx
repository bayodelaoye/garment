import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainGarmentsWomen } from "../../redux/garment";
import GarmentIndex from "../Garment/GarmentIndex";
import "../Garment/GarmentPage.css";
import Loading from "../Loading";

function WomensPage() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const womenGarments = useSelector(
    (state) => state.garments?.garmentsWomen?.garments
  );

  useEffect(() => {
    let timer;
    const getGarmentsWomen = async () => {
      await dispatch(obtainGarmentsWomen());
    };

    getGarmentsWomen().then(() => {
      timer = setTimeout(() => setIsLoaded(true), 300);
    });

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      {isLoaded ? (
        <div className="category-page-container">
          <h2 className="category-page-title">Womens' Garments</h2>

          <div className="garment-container">
            {womenGarments?.map((garment, index) => {
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

export default WomensPage;
