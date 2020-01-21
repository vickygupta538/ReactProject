import { of, from } from "rxjs";
import { switchMap, catchError, concatMap } from "rxjs/operators";
import { searchCharacter } from "../endpoints";
import { SEARCH_CHARACTER_REQUESTED } from "../actions/types";
import { searchCharacterFulfilled, pageLevelErrorOccured } from "../actions";
import { NEWTORK_STATUS } from "../constants";

const { ERROR_NETWORK_STATUS } = NEWTORK_STATUS;

const fetchCharacterEpics = (action$, state$, { get }) =>
  action$.ofType(SEARCH_CHARACTER_REQUESTED).pipe(
    switchMap(action => {
      return from(get(searchCharacter, action.payload)).pipe(
        concatMap(response => {
          return [searchCharacterFulfilled(response.data.results)];
        }),
        catchError(() => of(pageLevelErrorOccured(ERROR_NETWORK_STATUS)))
      );
    })
  );

export default fetchCharacterEpics;
