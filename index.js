import Redux from "./redux";

export function init(apiKey, version) {
  Redux.initLogRocket(apiKey, version);
}

export default function atomDevTools(key, ref, old, newState, action) {
  Redux.store.dispatch(Redux.actionCreator(action, newState));
}
