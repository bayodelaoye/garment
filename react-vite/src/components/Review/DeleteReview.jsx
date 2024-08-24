import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./DeleteReview.css";
import { removeReview } from "../../redux/review";
import { obtainGarmentReviews } from "../../redux/review";

function DeleteReview({ garment }) {
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(removeReview(garment.id));
    await dispatch(obtainGarmentReviews(garment.id));
    // await dispatch(obtainGarmentReviewsRating(garment.id));

    closeModal();
  };

  return (
    <form className="review-delete-keep-form" onSubmit={handleSubmit}>
      <h1 className="review-title">Delete Review</h1>

      <p>Are you sure you want to delete this review?</p>

      <div className="review-delete-keep-btn-container">
        <button className="review-delete-keep-btn" type="submit">
          Yes...Delete
        </button>
        <button
          className="review-delete-keep-btn"
          type="button"
          onClick={closeModal}
        >
          No, Keep
        </button>
      </div>
    </form>
  );
}

export default DeleteReview;
