const GET_FAVORITE_GARMENTS = "favorite/getFavoriteGarments";
const CREATE_FAVORITE = "favorite/createFavorite";
const DELETE_FAVORITE = "favorite/deleteFavorite";

const getFavoriteGarments = (favoriteGarments) => ({
  type: GET_FAVORITE_GARMENTS,
  payload: favoriteGarments,
});

const createFavorite = (newFavorite) => ({
  type: CREATE_FAVORITE,
  payload: newFavorite,
});

const deleteFavorite = (deleteFavoriteMessage) => ({
  type: DELETE_FAVORITE,
  payload: deleteFavoriteMessage,
});

export const obtainFavoriteGarments = () => async (dispatch) => {
  const response = await fetch(`/api/favorites/`);

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(getFavoriteGarments(data));

    return data;
  }
};

export const addFavorite = (garmentId) => async (dispatch) => {
  const response = await fetch(`/api/favorites/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      garment_id: garmentId,
    }),
  });

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(createFavorite(data));

    return data;
  }
};

export const removeFavorite = (garmentId) => async (dispatch) => {
  const response = await fetch(`/api/favorites/${garmentId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(deleteFavorite(data));

    return data;
  }
};

const initialState = { favorites: null };

function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FAVORITE_GARMENTS:
      return { ...state, favorites: action.payload };
    case CREATE_FAVORITE:
      return { ...state, createdFavorite: action.payload };
    case DELETE_FAVORITE:
      return { ...state, deleteFavoriteMessage: action.payload };
    default:
      return state;
  }
}

export default favoriteReducer;
