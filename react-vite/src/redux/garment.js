const GET_GARMENTS_MEN = "garment/getGarmentsMen";
const GET_GARMENTS_WOMEN = "garment/getGarmentsWomen";
const GET_GARMENTS_KIDS = "garment/getGarmentsKids";

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

const initialState = { garments: null };

function garmentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GARMENTS_MEN:
      return { ...state, garmentsMen: action.payload };
    case GET_GARMENTS_WOMEN:
      return { ...state, garmentsWomen: action.payload };
    case GET_GARMENTS_KIDS:
      return { ...state, garmentsKids: action.payload };
    default:
      return state;
  }
}

export default garmentReducer;
