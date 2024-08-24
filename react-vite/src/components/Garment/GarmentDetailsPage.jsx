import { Link, useParams } from "react-router-dom";
import { obtainGarmentSingle } from "../../redux/garment";
import { obtainGarmentImages } from "../../redux/garment";
import { obtainGarmentReviewsRating } from "../../redux/review";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TbMathGreater } from "react-icons/tb";
import "./GarmentDetailsPage.css";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

function GarmentDetailsPage() {
  const { garmentId } = useParams();
  const dispatch = useDispatch();
  const garment = useSelector((state) => state.garments?.currentGarment);
  const garmentImages = useSelector((state) => state.garments?.garmentImages);
  const garmentReviewsRating = useSelector(
    (state) => state.reviews?.reviewsRating
  );

  useEffect(() => {
    const getGarment = async () => {
      await dispatch(obtainGarmentSingle(garmentId));
    };

    const getGarmentImages = async () => {
      await dispatch(obtainGarmentImages(garmentId));
    };

    const getGarmentReviewsRating = async () => {
      await dispatch(obtainGarmentReviewsRating(garmentId));
    };

    getGarment();
    getGarmentImages();
    getGarmentReviewsRating();
  }, [dispatch]);

  return (
    <div className="garment-details-page-container">
      <div className="garment-details-navigation">
        <Link to="/" className="garment-details-link">
          Home
        </Link>
        <TbMathGreater />
        <Link to={`/${garment?.category}`} className="garment-details-link">
          {garment?.category}
        </Link>
        <TbMathGreater />
        <p>{garment?.title}</p>
      </div>

      <div className="garment-details-container">
        <div className="garment-details-image-container">
          <img src={garment?.preview_image_url} alt="garment preview image" />
          <div className="garment-details-sub-image-container">
            {garmentImages?.map((garmentImage, index) => {
              return (
                <img
                  src={garmentImage?.url}
                  alt="garment sub image"
                  key={index}
                  tabindex="0"
                />
              );
            })}
          </div>
        </div>

        <div className="garment-details-text-container">
          <h2>{garment?.title}</h2>
          {Math.floor(garmentReviewsRating?.average_reviews_rating) === 1 ? (
            <div className="rating-reviews-container">
              <div className="star-rating-container">
                <FaStar className="filled-star-rating" />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <p>({garmentReviewsRating?.number_of_reviews})</p>
            </div>
          ) : Math.floor(garmentReviewsRating?.average_reviews_rating) === 2 ? (
            <div className="rating-reviews-container">
              <div className="star-rating-container">
                <FaStar className="filled-star-rating" />
                <FaStar className="filled-star-rating" />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <p>({garmentReviewsRating?.number_of_reviews})</p>
            </div>
          ) : Math.floor(garmentReviewsRating?.average_reviews_rating) === 3 ? (
            <div className="rating-reviews-container">
              <div className="star-rating-container">
                <FaStar className="filled-star-rating" />
                <FaStar className="filled-star-rating" />
                <FaStar className="filled-star-rating" />
                <FaRegStar />
                <FaRegStar />
              </div>
              <p>({garmentReviewsRating?.number_of_reviews})</p>
            </div>
          ) : Math.floor(garmentReviewsRating?.average_reviews_rating) === 4 ? (
            <div className="rating-reviews-container">
              <div className="star-rating-container">
                <FaStar className="filled-star-rating" />
                <FaStar className="filled-star-rating" />
                <FaStar className="filled-star-rating" />
                <FaStar className="filled-star-rating" />
                <FaRegStar />
              </div>
              <p>({garmentReviewsRating?.number_of_reviews})</p>
            </div>
          ) : Math.floor(garmentReviewsRating?.average_reviews_rating) === 5 ? (
            <div className="rating-reviews-container">
              <div className="star-rating-container">
                <FaStar className="filled-star-rating" />
                <FaStar className="filled-star-rating" />
                <FaStar className="filled-star-rating" />
                <FaStar className="filled-star-rating" />
                <FaStar className="filled-star-rating" />
              </div>
              <p>({garmentReviewsRating?.number_of_reviews})</p>
            </div>
          ) : (
            <></>
          )}

          <div className="garment-details-price-container">
            <p className="garment-details-price price-discounted-price">
              ${garment.price}
            </p>
            <p className="garment-details-discounted-price price-discounted-price">
              ${garment.discounted_price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GarmentDetailsPage;
