import { SEARCH_CHARACTER_FULFILLED } from "./../../actions/types";
import charactersReducer from "./characters";

describe("Characters Reducer", () => {
  it("Should return default state", () => {
    const newState = charactersReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return new state if receiving type", () => {
    const posts = [{ title: "Test 1" }, { title: "Test 2" }, { title: "Test 3" }];
    const newState = charactersReducer(undefined, {
      type: SEARCH_CHARACTER_FULFILLED,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
