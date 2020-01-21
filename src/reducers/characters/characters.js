import { SEARCH_CHARACTER_FULFILLED } from "../../actions/types";

const characters = (state = [], action) => {
  switch (action.type) {
    case SEARCH_CHARACTER_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};

export default characters;
