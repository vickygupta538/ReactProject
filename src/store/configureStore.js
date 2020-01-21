import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "../reducers";
import rootEpic from "../epics";
import { get } from "../API";

/**
 * The redux state store, built with the Epic middleware.
 */

export const epicMiddleware = createEpicMiddleware({
  dependencies: {
    get
  }
});

// Middleware you want to use in production:
const enhancer = applyMiddleware(epicMiddleware);

export function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(rootReducer, initialState, enhancer);
  epicMiddleware.run(rootEpic);

  return store;
}
