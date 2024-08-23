import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainGarmentsWomen } from "../../redux/garment";
import GarmentIndex from "../Garment/GarmentIndex";
import "../Garment/GarmentPage.css";

function WomensPage() {
  const dispatch = useDispatch();
  const womenGarments = useSelector(
    (state) => state.garments?.garmentsWomen?.garments
  );

  useEffect(() => {
    const getGarmentsWomen = async () => {
      await dispatch(obtainGarmentsWomen());
    };

    getGarmentsWomen();
  }, [dispatch]);

  return (
    <div className="category-page-container">
      <h2 className="category-page-title">Womens' Garments</h2>

      <div className="garment-container">
        {womenGarments?.map((garment, index) => {
          return <GarmentIndex garment={garment} key={index} />;
        })}
      </div>
    </div>
  );
}

export default WomensPage;
