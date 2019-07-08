# redux dev tools for [js-atom v2](https://github.com/exodevhub/js-atom)

```ts
import atom from 'js-atom';
import atomReduxDevTools from 'atom-rdt';

// Setup
const store = createAtom({});
store.addWatch('rdt-watcher', atomReduxDevTools);

// Reducer
function myReducer(somethingNew) {
  return store.swap(oldState => ({ ...oldState, somethingNew }), 'my-action-type');
}
```
#### Outputs
<img src="./screenshot.png" height="200">
