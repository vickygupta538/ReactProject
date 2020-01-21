import { combineEpics } from "redux-observable";
import fetchCharacters from "./fetchCharactersEpic";

const rootEpic = combineEpics(fetchCharacters);

export default rootEpic;
