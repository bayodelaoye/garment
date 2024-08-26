const GET_GARMENTS_MEN = "garment/getGarmentsMen";
const GET_GARMENTS_WOMEN = "garment/getGarmentsWomen";
const GET_GARMENTS_KIDS = "garment/getGarmentsKids";
const GET_GARMENT_SINGLE = "garment/getGarmentSingle";
const GET_GARMENT_IMAGES = "garment/getGarmentImages";
const GET_GARMENTS_ALL = "garment/getGarmentsAll";
const GET_USER_GARMENTS = "garment/getUserGarments";
const DELETE_GARMENT = "garment/deleteGarment";

const getGarmentsMen = (garments) => ({
  type: GET_GARMENTS_MEN,
  payload: garments,
});

const getGarmentsWomen = (garments) => ({
  type: GET_GARMENTS_WOMEN,
  payload: garments,
});

const getGarmentsKids = (garments) => ({
  type: GET_GARMENTS_KIDS,
  payload: garments,
});

const getGarmentSingle = (garment) => ({
  type: GET_GARMENT_SINGLE,
  payload: garment,
});

const getGarmentImages = (garmentImages) => ({
  type: GET_GARMENT_IMAGES,
  payload: garmentImages,
});

const getGarmentsAll = (allGarments) => ({
  type: GET_GARMENTS_ALL,
  payload: allGarments,
});

const getUserGarments = (userGarments) => ({
  type: GET_USER_GARMENTS,
  payload: userGarments,
});

const deleteGarment = (deleteGarmentMessage) => ({
  type: DELETE_GARMENT,
  payload: deleteGarmentMessage,
});

export const obtainGarmentsMen = () => async (dispatch) => {
  const response = await fetch("/api/garments/men");

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(getGarmentsMen(data));

    return data;
  }
};

export const obtainGarmentsWomen = () => async (dispatch) => {
  const response = await fetch("/api/garments/women");

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(getGarmentsWomen(data));

    return data;
  }
};

export const obtainGarmentsKids = () => async (dispatch) => {
  const response = await fetch("/api/garments/kids");

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(getGarmentsKids(data));

    return data;
  }
};

export const obtainGarmentSingle = (garmentId) => async (dispatch) => {
  const response = await fetch(`/api/garments/${garmentId}`);

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(getGarmentSingle(data));

    return data;
  }
};

export const obtainGarmentImages = (garmentId) => async (dispatch) => {
  const response = await fetch(`/api/garments/${garmentId}/images`);

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(getGarmentImages(data));

    return data;
  }
};

export const obtainGarmentsAll = () => async (dispatch) => {
  const response = await fetch("/api/garments/");

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(getGarmentsAll(data));

    return data;
  }
};

export const obtainUserGarments = () => async (dispatch) => {
  const response = await fetch("/api/garments/user");

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(getUserGarments(data));

    return data;
  }
};

export const removeGarment = (garmentId) => async (dispatch) => {
  const response = await fetch(`/api/garments/${garmentId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(deleteGarment(data));

    return data;
  }
};

const initialState = { garments: null };

function garmentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GARMENTS_MEN:
      return { ...state, garmentsMen: action.payload };
    case GET_GARMENTS_WOMEN:
      return { ...state, garmentsWomen: action.payload };
    case GET_GARMENTS_KIDS:
      return { ...state, garmentsKids: action.payload };
    case GET_GARMENT_SINGLE:
      return { ...state, currentGarment: action.payload };
    case GET_GARMENT_IMAGES:
      return { ...state, garmentImages: action.payload };
    case GET_GARMENTS_ALL:
      return { ...state, allGarments: action.payload };
    case GET_USER_GARMENTS:
      return { ...state, userGarments: action.payload };
    case DELETE_GARMENT:
      return { ...state, deleteGarmentMessage: action.payload };
    default:
      return state;
  }
}

export default garmentReducer;
