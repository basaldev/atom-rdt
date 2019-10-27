import Redux from "./redux";

export function init(apiKey) {
  Redux.initLogRocket(apiKey);
}

export default function atomDevTools(key, ref, old, newState, action) {
  Redux.store.dispatch(Redux.actionCreator(action, newState));
}
