// import React from "react";

// import renderer from "react-test-renderer";

// import { Provider } from "react-redux";
// import SearchView from "./index";

// const initialState = {};
import { testStore } from "../../test/utils";
import fetchCharactersEpic from "./fetchCharactersEpic";
import { ActionsObservable } from "redux-observable";

describe("authenticateUserEpic", () => {
  it("should dispatch a JWT token when authenticating is successful", async () => {
    const response = {
      results: [
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
      ]
    };
    const client = { get: jest.fn() };
    client.get.mockReturnValue(Promise.resolve(response));

    const action$ = ActionsObservable.of({
      type: "SEARCH_CHARACTER_REQUESTED",
      payload: "sk"
    });
    const initialState = {
      characters: [],
      selectedCharacterIndex: null
    };
    const store = testStore(initialState);
    const epic$ = fetchCharactersEpic(action$, store, client);
    epic$.subscribe(actions => {
      expect(actions).toBe({ type: "SEARCH_CHARACTER_FULFILLED" });
    });
  });
  it("should dispatch an error when authenticating has failed", () => {
    const response = {
      results: [
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
      ]
    };
    const client = { get: jest.fn() };
    client.get.mockReturnValue(Promise.reject({}));

    const action$ = ActionsObservable.of({
      type: "SEARCH_CHARACTER_REQUESTED",
      payload: "sk"
    });
    const initialState = {
      characters: [],
      selectedCharacterIndex: null
    };
    const store = testStore(initialState);
    const epic$ = fetchCharactersEpic(action$, store, client);
    epic$.subscribe(actions => {
      expect(actions).toBe({ type: "ERROR_NETWORK_STATUS" });
    });
  });
});
