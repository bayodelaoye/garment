import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainGarmentsMen } from "../../redux/garment";
import GarmentIndex from "../Garment/GarmentIndex";
import "../Garment/GarmentPage.css";

function MensPage() {
  const dispatch = useDispatch();
  const menGarments = useSelector(
    (state) => state.garments?.garmentsMen?.garments
  );

  useEffect(() => {
    const getGarmentsMen = async () => {
      await dispatch(obtainGarmentsMen());
    };

    getGarmentsMen();
  }, [dispatch]);

  return (
    <div className="category-page-container">
      <h2 className="category-page-title">Mens' Garments</h2>

      <div className="garment-container">
        {menGarments?.map((garment, index) => {
          return <GarmentIndex garment={garment} key={index} />;
        })}
      </div>
    </div>
  );
}

export default MensPage;
