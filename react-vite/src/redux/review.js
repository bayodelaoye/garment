const GET_GARMENT_REVIEWS_RATING = "garment/getGarmentReviewsRating";

const getGarmentReviewsRating = (garmentReviewsRating) => ({
  type: GET_GARMENT_REVIEWS_RATING,
  payload: garmentReviewsRating,
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

const initialState = { reviews: null };

function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GARMENT_REVIEWS_RATING:
      return { ...state, reviewsRating: action.payload };
    default:
      return state;
  }
}

export default reviewReducer;
