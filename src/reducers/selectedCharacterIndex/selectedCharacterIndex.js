import { UPDATE_SELECTED_CHARACTER_INDEX, SEARCH_CHARACTER_REQUESTED } from "../../actions/types";

const selectedCharacterIndex = (state = null, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_CHARACTER_INDEX:
      return action.payload;
    case SEARCH_CHARACTER_REQUESTED:
      return null;
    default:
      return state;
  }
};

export default selectedCharacterIndex;
