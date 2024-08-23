import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainGarmentsKids } from "../../redux/garment";
import GarmentIndex from "../Garment/GarmentIndex";
import "../Garment/GarmentPage.css";

function KidsPage() {
  const dispatch = useDispatch();
  const kidsGarments = useSelector(
    (state) => state.garments?.garmentsKids?.garments
  );

  useEffect(() => {
    const getGarmentsKids = async () => {
      await dispatch(obtainGarmentsKids());
    };

    getGarmentsKids();
  }, [dispatch]);

  return (
    <div className="category-page-container">
      <h2 className="category-page-title">Kids Garments</h2>

      <div className="garment-container">
        {kidsGarments?.map((garment, index) => {
          return <GarmentIndex garment={garment} key={index} />;
        })}
      </div>
    </div>
  );
}

export default KidsPage;
