import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import garmentReducer from "./garment";
import reviewReducer from "./review";
import userReducer from "./user";
import favoriteReducer from "./favorite";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  session: sessionReducer,
  garments: garmentReducer,
  reviews: reviewReducer,
  user: userReducer,
  favorites: favoriteReducer,
  cart: cartReducer,
});

let enhancer;
if (import.meta.env.MODE === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
