const GET_USERS = "user/getUsers";

const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});

export const obtainUsers = () => async (dispatch) => {
  const response = await fetch(`/api/users/`);

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(getUsers(data));

    return data;
  }
};

const initialState = { user: null };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

export default userReducer;
