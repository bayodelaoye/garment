import { FaStar } from "react-icons/fa6";

function GarmentReviews({ review, users }) {
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
      </div>
    </div>
  );
}

export default GarmentReviews;
