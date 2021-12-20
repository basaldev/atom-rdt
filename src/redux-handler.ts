import { compose, createStore } from "redux";

const composeEnhancers = () => {
  const reduxDevToolsInstalled =
    typeof window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] !== "undefined";

  if (reduxDevToolsInstalled) {
    return compose(window["__REDUX_DEVTOOLS_EXTENSION__"]());
  }

};

const rootReducer = (state = {}, action: { type: string; payload: any }) => {
  return Object.assign({}, state, action.payload);
};

function actionCreator<T>(type: string, payload: T) {
  return {
    type,
    payload
  };
}

const store = createStore(rootReducer, composeEnhancers());

export default {
  store,
  actionCreator,
};
