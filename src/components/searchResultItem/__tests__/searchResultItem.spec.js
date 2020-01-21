import React from "react";
import renderer from "react-test-renderer";
import { testStore } from "../../../../test/utils";

import { Provider } from "react-redux";
import SearchResultItem from "../index";

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

const setUp = (props = {}, store = {}) => {
  store.dispatch = jest.fn();
  const component = renderer.create(
    <Provider store={store}>
      <SearchResultItem {...props} />
    </Provider>
  );

  return component;
};

describe("SearchResultItem Component", () => {
  let component;
  let mockLoginfn;
  let props;
  let store;
  beforeEach(() => {
    mockLoginfn = jest.fn();
    props = {
      updateSelectedCharacterIndex: mockLoginfn,
      index: 0,
      name: "test"
    };
    store = testStore(initialState);
    component = setUp(props, store);
  });

  it("should match snapshot renderer", () => {
    const wrapper = component.toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render without errors", () => {
    const wrapper = component.root.find(
      el => el.type === "section" && el.props["data-test"] === "SearchResultItemComponent"
    );
    expect(wrapper).toBeTruthy();
  });

  it("simulate click on list item", () => {
    const wrapper = component.root.find(
      el => el.type === "section" && el.props["data-test"] === "SearchResultItemComponent"
    );
    wrapper.props.onClick();
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
