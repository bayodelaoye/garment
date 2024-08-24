import { FaStar } from "react-icons/fa6";
import OpenModalButton from "../OpenModalButton";
import { useModal } from "../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import DeleteReview from "../Review/DeleteReview";

function GarmentReviews({ review, users, garment }) {
  const { closeModal } = useModal();
  const currentUser = useSelector((state) => state.session?.user);
  const user = users?.filter((user) => {
    return user?.id === review?.user_id;
  });

  return (
    <div className="individual-review-container">
      <div className="name-avatar">
        <p>{user ? user[0]?.first_name[0] : ""}</p>
      </div>

      <div className="review-content">
        <div className="review-name-rating">
          <p className="review-first-name">{user ? user[0]?.first_name : ""}</p>
          <div className="review-star-rating">
            <p>{review?.stars}</p>
            <FaStar className="filled-star-rating" />
          </div>
        </div>
        <p className="review-date">{review?.created_at}</p>
        <p>{review?.review}</p>
        {currentUser?.id === review?.user_id ? (
          <div className="edit-delete-review-container">
            <OpenModalButton
              buttonText={`Delete Review`}
              onClose={closeModal}
              className="leave-review-btn"
              modalComponent={<DeleteReview garment={garment} />}
            />
            <OpenModalButton
              buttonText={`Update Review`}
              onClose={closeModal}
              className="leave-review-btn"
              // modalComponent={<CreateReview garment={garment} />}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default GarmentReviews;
