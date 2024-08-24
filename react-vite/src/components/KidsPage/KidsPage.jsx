import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainGarmentsKids } from "../../redux/garment";
import GarmentIndex from "../Garment/GarmentIndex";
import "../Garment/GarmentPage.css";
import Loading from "../Loading";

function KidsPage() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const kidsGarments = useSelector(
    (state) => state.garments?.garmentsKids?.garments
  );

  useEffect(() => {
    let timer;
    const getGarmentsKids = async () => {
      await dispatch(obtainGarmentsKids());
    };

    getGarmentsKids().then(() => {
      timer = setTimeout(() => setIsLoaded(true), 700);
    });

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      {isLoaded ? (
        <div className="category-page-container">
          <h2 className="category-page-title">Kids Garments</h2>

          <div className="garment-container">
            {kidsGarments?.map((garment, index) => {
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

export default KidsPage;
