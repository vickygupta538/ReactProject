//import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./../src/reducers";
import { epicMiddleware } from "./../src/store/configureStore";

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

// export const checkProps = (component, expectedProps) => {
//   const propsErr = checkPropTypes(component.propTypes, expectedProps, "props", component.name);
//   return propsErr;
// };

export const testStore = initialState => {
  const enhancer = applyMiddleware(epicMiddleware);
  return createStore(rootReducer, initialState, enhancer);
};
