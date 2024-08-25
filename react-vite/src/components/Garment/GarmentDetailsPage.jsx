import { Link, useParams } from "react-router-dom";
import { obtainGarmentSingle } from "../../redux/garment";
import { obtainGarmentImages } from "../../redux/garment";
import { obtainGarmentReviewsRating } from "../../redux/review";
import { obtainGarmentReviews } from "../../redux/review";
import { obtainUsers } from "../../redux/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { TbMathGreater } from "react-icons/tb";
import "./GarmentDetailsPage.css";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import OpenModalButton from "../OpenModalButton";
import { useModal } from "../../context/Modal";
import GarmentReviews from "./GarmentReviews";
import CreateReview from "../Review/CreateReview";
import Loading from "../Loading";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { addFavorite } from "../../redux/favorite";
import { removeFavorite } from "../../redux/favorite";
import { obtainFavoriteGarments } from "../../redux/favorite";
import { addToBag } from "../../redux/cart";
import { obtainAmountCartItems } from "../../redux/cart";

function GarmentDetailsPage() {
  const { garmentId } = useParams();
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector((state) => state.session?.user);
  const garment = useSelector((state) => state.garments?.currentGarment);
  const garmentImages = useSelector((state) => state.garments?.garmentImages);
  const users = useSelector((state) => state.user?.users?.users);
  const garmentReviewsRating = useSelector(
    (state) => state.reviews?.reviewsRating
  );
  const garmentReviews = useSelector(
    (state) => state.reviews?.garmentReviews?.reviews
  );
  const userAlreadyHasReview = garmentReviews?.filter((review) => {
    return review?.user_id === user?.id;
  });
  const favorites = useSelector(
    (state) => state.favorites?.favorites?.favorites
  );
  const favoriteGarmentIds = new Set(favorites?.map((fav) => fav?.garment_id));
  const isFavorite = favoriteGarmentIds.has(garment?.id);

  useEffect(() => {
    let timer;
    const getGarment = async () => {
      await dispatch(obtainGarmentSingle(garmentId));
    };

    const getGarmentImages = async () => {
      await dispatch(obtainGarmentImages(garmentId));
    };

    const getGarmentReviewsRating = async () => {
      await dispatch(obtainGarmentReviewsRating(garmentId));
    };

    const getGarmentReviews = async () => {
      await dispatch(obtainGarmentReviews(garmentId));
    };

    const getUsers = async () => {
      await dispatch(obtainUsers());
    };

    getGarment();
    getGarmentImages();
    getGarmentReviewsRating();
    getGarmentReviews();
    getUsers().then(() => {
      timer = setTimeout(() => {
        setIsLoaded(true);
        const button = document.getElementById("medium-size-button");
        if (button) button.focus();
      }, 700);
    });

    return () => clearTimeout(timer);
  }, [dispatch]);

  const toggleFavorite = async () => {
    if (isFavorite) {
      await dispatch(removeFavorite(garment.id));
    } else {
      await dispatch(addFavorite(garment.id));
    }
    await dispatch(obtainFavoriteGarments());
  };

  const handleAddToCart = async () => {
    await dispatch(addToBag(garmentId));
    await dispatch(obtainAmountCartItems());
  };

  return (
    <>
      {isLoaded ? (
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
              <img
                src={garment?.preview_image_url}
                alt="garment preview image"
              />
              {user ? (
                <>
                  {isFavorite ? (
                    <FaHeart
                      className="heart-icon favorite-selected"
                      onClick={toggleFavorite}
                    />
                  ) : (
                    <FaRegHeart
                      className="heart-icon"
                      onClick={toggleFavorite}
                    />
                  )}
                </>
              ) : (
                <></>
              )}

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
              {Math.floor(garmentReviewsRating?.average_reviews_rating) ===
              1 ? (
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
              ) : Math.floor(garmentReviewsRating?.average_reviews_rating) ===
                2 ? (
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
              ) : Math.floor(garmentReviewsRating?.average_reviews_rating) ===
                3 ? (
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
              ) : Math.floor(garmentReviewsRating?.average_reviews_rating) ===
                4 ? (
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
              ) : Math.floor(garmentReviewsRating?.average_reviews_rating) ===
                5 ? (
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
                  ${garment?.price}
                </p>
                <p className="garment-details-discounted-price price-discounted-price">
                  ${garment?.discounted_price}
                </p>
              </div>
              <p>{garment?.description}</p>

              <div className="select-size-container">
                <p>Select Size:</p>
                <div className="size-btn-container">
                  <button>S</button>
                  <button id="medium-size-button">M</button>
                  <button>L</button>
                  <button>XL</button>
                  <button>XXL</button>
                </div>
              </div>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add To Cart
              </button>
            </div>
          </div>

          <div className="reviews-container">
            <div className="review-heading-container">
              <div className="review-heading">
                <p>
                  {Math.floor(garmentReviewsRating?.average_reviews_rating)}
                </p>
                <FaStar className="filled-star-rating" />
                <p>out of 5 stars</p>
                <GoDotFill />
                <p>
                  {garmentReviewsRating?.number_of_reviews} reviews in total
                </p>
              </div>
              {user ? (
                <>
                  {userAlreadyHasReview?.length === 0 ? (
                    <OpenModalButton
                      buttonText={`Leave Review`}
                      onClose={closeModal}
                      className="leave-review-btn"
                      modalComponent={<CreateReview garment={garment} />}
                    />
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="review-container">
              {garmentReviews
                ?.sort(
                  (a, b) => new Date(b.created_at) - new Date(a.created_at)
                )
                .map((review, index) => {
                  return (
                    <GarmentReviews
                      review={review}
                      users={users}
                      garment={garment}
                      key={index}
                    />
                  );
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

export default GarmentDetailsPage;
