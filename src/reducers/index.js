import { combineReducers } from "redux";
import characters from "./characters/characters";
import selectedCharacterIndex from "./selectedCharacterIndex/selectedCharacterIndex";

/**
 * Returns the combined reducer.
 * @param state
 * @param action
 */

export default combineReducers({
  characters,
  selectedCharacterIndex
});
