import { compose, createStore, applyMiddleware } from "redux";
import LogRocket from "logrocket";

const initLogRocket = (apiKey, version = "0.0.0") => {
  if (apiKey) {
    LogRocket.init(apiKey, {
      release: version
    });
  }
};

const composeEnhancers = () => {
  if (
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== "undefined" &&
    LogRocket._isInitialized
  ) {
    return compose(
      applyMiddleware(LogRocket.reduxMiddleware()),
      window["__REDUX_DEVTOOLS_EXTENSION__"]()
    );
  }
  if (LogRocket._isInitialized) {
    return compose(applyMiddleware(LogRocket.reduxMiddleware()));
  }

  return compose;
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
