var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "redux", "logrocket"], function (require, exports, redux_1, logrocket_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    logrocket_1 = __importDefault(logrocket_1);
    var initLogRocket = function (apiKey, version) {
        if (version === void 0) { version = "0.0.0"; }
        if (apiKey) {
            logrocket_1.default.init(apiKey, {
                release: version
            });
        }
    };
    var composeEnhancers = function () {
        var reduxDevToolsInstalled = typeof window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] !== "undefined";
        if (reduxDevToolsInstalled && logrocket_1.default._isInitialized) {
            return redux_1.compose(redux_1.applyMiddleware(logrocket_1.default.reduxMiddleware()), window["__REDUX_DEVTOOLS_EXTENSION__"]());
        }
        if (logrocket_1.default._isInitialized && !reduxDevToolsInstalled) {
            return redux_1.compose(redux_1.applyMiddleware(logrocket_1.default.reduxMiddleware()));
        }
        if (!logrocket_1.default._isInitialized && reduxDevToolsInstalled) {
            return redux_1.compose(window["__REDUX_DEVTOOLS_EXTENSION__"]());
        }
        return redux_1.compose(redux_1.applyMiddleware(logrocket_1.default.reduxMiddleware()));
    };
    var rootReducer = function (state, action) {
        if (state === void 0) { state = {}; }
        return Object.assign({}, state, action.payload);
    };
    var actionCreator = function (type, payload) { return ({
        type: type,
        payload: payload
    }); };
    var store = redux_1.createStore(rootReducer, composeEnhancers());
    exports.default = {
        store: store,
        actionCreator: actionCreator,
        initLogRocket: initLogRocket
    };
});
