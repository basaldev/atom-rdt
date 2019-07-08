import { compose, createStore } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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
  actionCreator
};