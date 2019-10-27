import { compose, createStore, applyMiddleware } from "redux";
import LogRocket from "logrocket";

const initLogRocket = apiKey => {
  LogRocket.init(apiKey);
};

const composeEnhancers = () => {
  if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== "undefined") {
    return compose(
      applyMiddleware(LogRocket.reduxMiddleware()),
      window["__REDUX_DEVTOOLS_EXTENSION__"]()
    );
  }
  return compose(applyMiddleware(LogRocket.reduxMiddleware()));
};

const rootReducer = (state = {}, action) => {
  return Object.assign({}, state, action.payload);
};

const actionCreator = (type, payload) => ({
  type,
  payload
});

const store = createStore(rootReducer, composeEnhancers());

export default {
  store,
  actionCreator,
  initLogRocket
};
