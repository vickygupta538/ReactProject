import React from "react";
import renderer from "react-test-renderer";
import { testStore } from "../../../../test/utils";
import { Provider } from "react-redux";
import SearchView from "../index";

const initialState = {};

describe("SearchView Component Test Cases", () => {
  let store;
  let component;
  beforeEach(() => {
    store = testStore(initialState);
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <SearchView />
      </Provider>
    );
  });

  it("should match snapshot renderer", () => {
    const wrapper = component.toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("simulate change event", () => {
    renderer.act(() => {
      component.root.findByType("input").props.onChange({ target: { value: "test" } });
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
