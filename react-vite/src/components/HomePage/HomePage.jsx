import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainGarmentsMen } from "../../redux/garment";
import { obtainGarmentsWomen } from "../../redux/garment";
import { obtainGarmentsKids } from "../../redux/garment";
import GarmentIndex from "../Garment/GarmentIndex";
import "./HomePage.css";
import Loading from "../Loading";
import { MdWavingHand } from "react-icons/md";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

function HomePage() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const menGarments = useSelector(
    (state) => state.garments?.garmentsMen?.garments
  );
  const womenGarments = useSelector(
    (state) => state.garments?.garmentsWomen?.garments
  );
  const kidsGarments = useSelector(
    (state) => state.garments?.garmentsKids?.garments
  );

  useEffect(() => {
    let timer;
    const getCategoryGarments = async () => {
      await dispatch(obtainGarmentsMen());
      await dispatch(obtainGarmentsWomen());
      await dispatch(obtainGarmentsKids());
    };

    getCategoryGarments().then(() => {
      timer = setTimeout(() => setIsLoaded(true), 700);
    });

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      {isLoaded ? (
        <div className="home-page-container">
          <div className="hero-section-container">
            <div className="hero-section-content">
              <div className="home-page-greeting">
                <p>Welcome</p>
                <MdWavingHand />
              </div>
              <p>New Collection Available</p>

              <Link to="/kids">
                <button className="latest-collection-btn">
                  Latest Collection
                  <HiMiniArrowLongRight />
                </button>
              </Link>
            </div>
          </div>

          <div className="popular-category-container">
            <div className="popular-container">
              <p className="popular-category-text">POPULAR WITH MEN</p>
              <div className="popular-category-underline"></div>
            </div>
            <div className="garment-container">
              {menGarments?.slice(0, 3).map((garment, index) => {
                return <GarmentIndex garment={garment} key={index} />;
              })}
            </div>
          </div>

          <div className="home-page-banner-container">
            <div className="home-page-banner-one"></div>
          </div>

          <div className="popular-category-container">
            <div className="popular-container">
              <p className="popular-category-text">POPULAR WITH WOMEN</p>
              <div className="popular-category-underline"></div>
            </div>
            <div className="garment-container">
              {womenGarments?.slice(0, 3).map((garment, index) => {
                return <GarmentIndex garment={garment} key={index} />;
              })}
            </div>
          </div>

          <div className="home-page-banner-container">
            <div className="home-page-banner-two"></div>
          </div>

          <div className="popular-category-container">
            <div className="popular-container">
              <p className="popular-category-text">NEW COLLECTION</p>
              <div className="popular-category-underline"></div>
            </div>
            <div className="garment-container">
              {kidsGarments?.slice(0, 6).map((garment, index) => {
                return <GarmentIndex garment={garment} key={index} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default HomePage;
