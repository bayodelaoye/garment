const GET_GARMENT_REVIEWS_RATING = "review/getGarmentReviewsRating";
const GET_GARMENT_REVIEWS = "review/getGarmentReviews";

const getGarmentReviewsRating = (garmentReviewsRating) => ({
  type: GET_GARMENT_REVIEWS_RATING,
  payload: garmentReviewsRating,
});

const getGarmentReviews = (garmentReviews) => ({
  type: GET_GARMENT_REVIEWS,
  payload: garmentReviews,
});

export const obtainGarmentReviewsRating = (garmentId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${garmentId}/rating`);

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(getGarmentReviewsRating(data));

    return data;
  }
};

export const obtainGarmentReviews = (garmentId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${garmentId}`);

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(getGarmentReviews(data));

    return data;
  }
};

const initialState = { reviews: null };

function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GARMENT_REVIEWS_RATING:
      return { ...state, reviewsRating: action.payload };
    case GET_GARMENT_REVIEWS:
      return { ...state, garmentReviews: action.payload };
    default:
      return state;
  }
}

export default reviewReducer;
