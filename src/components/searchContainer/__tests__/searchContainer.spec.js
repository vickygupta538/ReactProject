import React from "react";
import renderer from "react-test-renderer";
import { testStore } from "../../../../test/utils";
import SearchContainer from "../index";
import { Provider } from "react-redux";

const setUp = (props = {}) => {
  const initialState = {};
  const store = testStore(initialState);
  const component = renderer.create(
    <Provider store={store}>
      <SearchContainer />
    </Provider>
  );
  return component;
};

describe("SearchContainer Component Test Cases", () => {
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
      el => el.type === "section" && el.props["data-test"] === "SearchContainerComponent"
    );

    expect(wrapper).toBeTruthy();
  });
});
