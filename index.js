var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./redux-handler"], function (require, exports, redux_handler_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.init = void 0;
    redux_handler_1 = __importDefault(redux_handler_1);
    function init(apiKey, version) {
        redux_handler_1.default.initLogRocket(apiKey, version);
    }
    exports.init = init;
    function atomDevTools(key, ref, old, newState, action) {
        redux_handler_1.default.store.dispatch(redux_handler_1.default.actionCreator(action, newState));
    }
    exports.default = atomDevTools;
});
