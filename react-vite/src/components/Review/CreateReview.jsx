import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./CreateReview.css";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { addReview } from "../../redux/review";
import { obtainGarmentReviews } from "../../redux/review";
import { obtainGarmentReviewsRating } from "../../redux/review";

function CreateReview({ garment }) {
  const [stars, setStars] = useState(0);
  const [review, setReview] = useState("");
  const [initialOpenModal, setInitialOpenModal] = useState(false);
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    let errors = {};
    if (stars < 1) errors.stars = "Stars can't be empty";
    if (review.length < 10)
      errors.review = "Review must be at least 10 characters long";

    setErrors(errors);
  }, [review, stars]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      await dispatch(
        addReview({ garmentId: garment.id, review: review, stars: stars })
      );
      await dispatch(obtainGarmentReviews(garment.id));
      await dispatch(obtainGarmentReviewsRating(garment.id));
      setStars(0);
      setReview("");
      setErrors({});
      closeModal();
    }

    setInitialOpenModal(true);
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h1 className="review-title">Leave a Review</h1>
      {initialOpenModal ? (
        <div>
          {errors.stars && (
            <p className="login-sign-up-error">{errors.stars}</p>
          )}
          {errors.review && (
            <p className="login-sign-up-error">{errors.review}</p>
          )}
        </div>
      ) : (
        <></>
      )}

      <label className="review-label">
        Stars:
        {stars === 0 ? (
          <div className="star-ratings-container">
            <div onClick={() => setStars(1)} className="rating-cursor-pointer">
              <FaRegStar />
            </div>
            <div onClick={() => setStars(2)} className="rating-cursor-pointer">
              <FaRegStar />
            </div>
            <div onClick={() => setStars(3)} className="rating-cursor-pointer">
              <FaRegStar />
            </div>
            <div onClick={() => setStars(4)} className="rating-cursor-pointer">
              <FaRegStar />
            </div>
            <div onClick={() => setStars(5)} className="rating-cursor-pointer">
              <FaRegStar />
            </div>
          </div>
        ) : stars === 1 ? (
          <div className="star-ratings-container">
            <div onClick={() => setStars(1)} className="rating-cursor-pointer">
              <FaStar className="filled-star-rating" />
            </div>
            <div onClick={() => setStars(2)} className="rating-cursor-pointer">
              <FaRegStar />
            </div>
            <div onClick={() => setStars(3)} className="rating-cursor-pointer">
              <FaRegStar />
            </div>
            <div onClick={() => setStars(4)} className="rating-cursor-pointer">
              <FaRegStar />
            </div>
            <div onClick={() => setStars(5)} className="rating-cursor-pointer">
              <FaRegStar />
            </div>
          </div>
        ) : stars === 2 ? (
          <div className="star-ratings-container">
            <div onClick={() => setStars(1)} className="rating-cursor-pointer">
              <FaStar className="filled-star-rating" />
            </div>
            <div onClick={() => setStars(2)} className="rating-cursor-pointer">
              <FaStar className="filled-star-rating" />
            </div>
            <div onClick={() => setStars(3)} className="rating-cursor-pointer">
              <FaRegStar />
            </div>
            <div onClick={() => setStars(4)} className="rating-cursor-pointer">
              <FaRegStar />
            </div>
            <div onClick={() => setStars(5)} className="rating-cursor-pointer">
              <FaRegStar />
            </div>
          </div>
        ) : stars === 3 ? (
          <div className="star-ratings-container">
            <div onClick={() => setStars(1)} className="rating-cursor-pointer">
              <FaStar className="filled-star-rating" />
            </div>
            <div onClick={() => setStars(2)} className="rating-cursor-pointer">
              <FaStar className="filled-star-rating" />
            </div>
            <div onClick={() => setStars(3)} className="rating-cursor-pointer">
              <FaStar className="filled-star-rating" />
            </div>
            <div onClick={() => setStars(4)} className="rating-cursor-pointer">
              <FaRegStar />
            </div>
            <div onClick={() => setStars(5)} className="rating-cursor-pointer">
              <FaRegStar />
            </div>
          </div>
        ) : stars === 4 ? (
          <div className="star-ratings-container">
            <div onClick={() => setStars(1)} className="rating-cursor-pointer">
              <FaStar className="filled-star-rating" />
            </div>
            <div onClick={() => setStars(2)} className="rating-cursor-pointer">
              <FaStar className="filled-star-rating" />
            </div>
            <div onClick={() => setStars(3)} className="rating-cursor-pointer">
              <FaStar className="filled-star-rating" />
            </div>
            <div onClick={() => setStars(4)} className="rating-cursor-pointer">
              <FaStar className="filled-star-rating" />
            </div>
            <div onClick={() => setStars(5)} className="rating-cursor-pointer">
              <FaRegStar />
            </div>
          </div>
        ) : stars === 5 ? (
          <div className="star-ratings-container">
            <div onClick={() => setStars(1)} className="rating-cursor-pointer">
              <FaStar className="filled-star-rating" />
            </div>
            <div onClick={() => setStars(2)} className="rating-cursor-pointer">
              <FaStar className="filled-star-rating" />
            </div>
            <div onClick={() => setStars(3)} className="rating-cursor-pointer">
              <FaStar className="filled-star-rating" />
            </div>
            <div onClick={() => setStars(4)} className="rating-cursor-pointer">
              <FaStar className="filled-star-rating" />
            </div>
            <div onClick={() => setStars(5)} className="rating-cursor-pointer">
              <FaStar className="filled-star-rating" />
            </div>
          </div>
        ) : (
          <></>
        )}
      </label>

      <label className="review-label">
        Review (10 characters or more):
        <textarea
          placeholder="Leave your review here..."
          className="review-input"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </label>

      <button className="create-review-btn" type="submit">
        Submit Your Review
      </button>
    </form>
  );
}

export default CreateReview;
