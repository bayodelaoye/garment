const GET_AMOUNT_CART_ITEMS = "cart/getAmountCartItems";
const ADD_TO_CART = "cart/addToCart";
const GET_CART_ITEMS = "cart/getCartItems";
const UPDATE_CART = "cart/updateCart";
const DELETE_CART_ITEM = "cart/deleteCartItem";

const getAmountCartItems = (amountOfCartItems) => ({
  type: GET_AMOUNT_CART_ITEMS,
  payload: amountOfCartItems,
});

const addToCart = (addToCartMessage) => ({
  type: ADD_TO_CART,
  payload: addToCartMessage,
});

const getCartItems = (cart) => ({
  type: GET_CART_ITEMS,
  payload: cart,
});

const updateCart = (updatedCartItem) => ({
  type: UPDATE_CART,
  payload: updatedCartItem,
});

const deleteCartItem = (deleteCartItemMessage) => ({
  type: DELETE_CART_ITEM,
  payload: deleteCartItemMessage,
});

export const obtainAmountCartItems = () => async (dispatch) => {
  const response = await fetch(`/api/cart/cart_item`);

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(getAmountCartItems(data));

    return data;
  }
};

export const addToBag = (garmentId) => async (dispatch) => {
  const response = await fetch(`/api/cart/`, {
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

    dispatch(addToCart(data));

    return data;
  }
};

export const obtainCartItems = () => async (dispatch) => {
  const response = await fetch(`/api/cart/`);

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(getCartItems(data));

    return data;
  }
};

export const editCart = (editCartObject) => async (dispatch) => {
  const response = await fetch(`/api/cart/${editCartObject.cartItemId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      quantity: editCartObject.quantity,
    }),
  });

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(updateCart(data));

    return data;
  }
};

export const removeCartItem = (cartItemId) => async (dispatch) => {
  const response = await fetch(`/api/cart/${cartItemId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }

    dispatch(deleteCartItem(data));

    return data;
  }
};

const initialState = { cart: null };

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AMOUNT_CART_ITEMS:
      return { ...state, amountOfCartItems: action.payload };
    case ADD_TO_CART:
      return { ...state, addToCartMessage: action.payload };
    case GET_CART_ITEMS:
      return { ...state, cartItems: action.payload };
    case UPDATE_CART:
      return { ...state, updatedCartItem: action.payload };
    case DELETE_CART_ITEM:
      return { ...state, deleteCartItemMessage: action.payload };
    default:
      return state;
  }
}

export default cartReducer;
