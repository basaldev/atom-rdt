import Redux from "./redux-handler";

export default function atomDevTools<T>(key: string, ref: string, old: T, newState: T, action: string) {
  Redux.store.dispatch(Redux.actionCreator(action, newState));
}
