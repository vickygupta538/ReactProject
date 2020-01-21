import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { findByTestAtrr, testStore } from "../../test/utils";
import { Provider } from "react-redux";
import App from "../App";

const setUp = (props = {}) => {
  const component = shallow(<App {...props} />);
  return component;
};

describe("App Component Test Cases", () => {
  it("should match snapshot renderer", () => {
    const initialState = {};
    const store = testStore(initialState);
    const wrapper = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  describe("App Component Rendering", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAtrr(component, "AppComponent");
      expect(wrapper.exists()).toBeTruthy();
    });
  });
});
