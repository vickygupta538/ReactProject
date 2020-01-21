import { UPDATE_SELECTED_CHARACTER_INDEX, SEARCH_CHARACTER_REQUESTED } from "./../../actions/types";
import selectedCharacterIndex from "./selectedCharacterIndex";

describe("Characters Reducer", () => {
  it("Should return default state", () => {
    const newState = selectedCharacterIndex(undefined, {});
    expect(newState).toEqual(null);
  });

  it("Should return new state if receiving type", () => {
    const newState = selectedCharacterIndex(undefined, {
      type: SEARCH_CHARACTER_REQUESTED,
      payload: "test"
    });
    expect(newState).toEqual(null);
  });

  it("Should return new state if receiving type 2", () => {
    const newState = selectedCharacterIndex(undefined, {
      type: UPDATE_SELECTED_CHARACTER_INDEX,
      payload: 0
    });
    expect(newState).toEqual(0);
  });
});
