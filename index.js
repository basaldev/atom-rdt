import Redux from './redux';
export default function atomDevTools(key, ref, old, newState, action) {
  Redux.store.dispatch(Redux.actionCreator(action, newState));
}
