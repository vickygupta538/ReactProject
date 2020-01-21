import React from "react";
import renderer from "react-test-renderer";
import { testStore } from "../../../../test/utils";
import SearchResultDetailView from "../index";
import { Provider } from "react-redux";

const initialState = {
  characters: [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male"
    }
  ],
  selectedCharacterIndex: 0
};

const setUp = () => {
  const store = testStore(initialState);
  const component = renderer.create(
    <Provider store={store}>
      <SearchResultDetailView />
    </Provider>
  );

  return component;
};

describe("SearchResultDetailView Component Test Cases", () => {
  let component;

  beforeEach(() => {
    component = setUp(initialState);
  });

  it("should match snapshot renderer", () => {
    const wrapper = component.toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render without errors", () => {
    const wrapper = component.root.find(
      el => el.type === "section" && el.props["data-test"] === "SearchResultDetailViewComponent"
    );
    expect(wrapper).toBeTruthy();
  });
});
