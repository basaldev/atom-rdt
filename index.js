import Redux from './redux';
export default function atomDevTools( key, ref, old, newState) {
  Redux.store.dispatch(Redux.updateStore(newState, key));
}
