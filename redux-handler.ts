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
  const reduxDevToolsInstalled =
    typeof window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] !== "undefined";
  if (reduxDevToolsInstalled && (LogRocket as any)._isInitialized) {
    return compose(
      applyMiddleware(LogRocket.reduxMiddleware()),
      window["__REDUX_DEVTOOLS_EXTENSION__"]()
    );
  }
  if ((LogRocket as any)._isInitialized && !reduxDevToolsInstalled) {
    return compose(applyMiddleware(LogRocket.reduxMiddleware()));
  }

  if (!(LogRocket as any)._isInitialized && reduxDevToolsInstalled) {
    return compose(window["__REDUX_DEVTOOLS_EXTENSION__"]());
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
