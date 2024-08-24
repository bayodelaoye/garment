const GET_GARMENT_REVIEWS_RATING = "review/getGarmentReviewsRating";
const GET_GARMENT_REVIEWS = "review/getGarmentReviews";
const CREATE_REVIEW = "review/createReview";
const DELETE_REVIEW = "review/deleteReview";
const EDIT_REVIEW = "review/editReview";

const getGarmentReviewsRating = (garmentReviewsRating) => ({
  type: GET_GARMENT_REVIEWS_RATING,
  payload: garmentReviewsRating,
});

const getGarmentReviews = (garmentReviews) => ({
  type: GET_GARMENT_REVIEWS,
  payload: garmentReviews,
});

const createReview = (newReview) => ({
  type: CREATE_REVIEW,
  payload: newReview,
});

const deleteReview = (deleteReviewMessage) => ({
  type: DELETE_REVIEW,
  payload: deleteReviewMessage,
});

const editReview = (updatedReview) => ({
  type: EDIT_REVIEW,
  payload: updatedReview,
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

export const addReview = (reviewObject) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewObject.garmentId}/new`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      garment_id: reviewObject.garmentId,
      review: reviewObject.review,
      stars: reviewObject.stars,
    }),
  });

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(createReview(data));

    return data;
  }
};

export const removeReview = (garmentId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${garmentId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(deleteReview(data));

    return data;
  }
};

export const updateReview = (reviewObject) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewObject.garmentId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      garment_id: reviewObject.garmentId,
      review: reviewObject.review,
      stars: reviewObject.stars,
    }),
  });

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(editReview(data));

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
    case CREATE_REVIEW:
      return { ...state, createdReview: action.payload };
    case DELETE_REVIEW:
      return { ...state, deleteReviewMessage: action.payload };
    case EDIT_REVIEW:
      return { ...state, updatedReview: action.payload };
    default:
      return state;
  }
}

export default reviewReducer;
