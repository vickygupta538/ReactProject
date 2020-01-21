import React from "react";
import renderer from "react-test-renderer";
import { testStore } from "../../../../test/utils";
import SearchWrapper from "../index";
import { Provider } from "react-redux";

const setUp = (props = {}) => {
  const initialState = {};
  const store = testStore(initialState);
  const component = renderer.create(
    <Provider store={store}>
      <SearchWrapper />
    </Provider>
  );
  return component;
};

describe("SearchWrapper Component Test Cases", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("should match snapshot renderer", () => {
    const wrapper = component.toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render without errors", () => {
    const wrapper = component.root.find(
      el => el.type === "section" && el.props["data-test"] === "SearchWrapperComponent"
    );
    expect(wrapper).toBeTruthy();
  });
});
