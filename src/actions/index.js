import { createAction } from "redux-actions";
import {
  PAGE_LEVEL_ERROR_OCCURED,
  FETCH_ONE_PORTAL_HOME_DATA,
  FETCH_ONE_PORTAL_HOME_DATA_FULFILLED,
  SET_PAGE_TYPE,
  SUBSTANTIATE_ONE_PORTAL_IRS_EXCEPTIONS,
  RESET_IRS_EXCEPTIONS_VALUES,
  SUBSTANTIATE_ONE_PORTAL_IRS_EXCEPTIONS_FULFILLED,
  UPDATE_EDELIVERY_CONSENT_REQUESTED,
  UPDATE_EDELIVERY_CONSENT_FULFILLED,
  SEARCH_CHARACTER_REQUESTED,
  SEARCH_CHARACTER_FULFILLED,
  UPDATE_SELECTED_CHARACTER_INDEX
} from "./types";

/**
 * these are the factory methods for the actions.
 */

export const pageLevelErrorOccured = createAction(PAGE_LEVEL_ERROR_OCCURED);
export const searchCharacterRequested = createAction(SEARCH_CHARACTER_REQUESTED);
export const updateSelectedCharacterIndex = createAction(UPDATE_SELECTED_CHARACTER_INDEX);
export const searchCharacterFulfilled = createAction(SEARCH_CHARACTER_FULFILLED);

export const fetchOnePortalHomeData = createAction(FETCH_ONE_PORTAL_HOME_DATA);

export const fetchOnePortalHomeDataFulfilled = createAction(FETCH_ONE_PORTAL_HOME_DATA_FULFILLED);

export const setPageType = createAction(SET_PAGE_TYPE);

export const substantiateOnePortalIRSExceptions = createAction(SUBSTANTIATE_ONE_PORTAL_IRS_EXCEPTIONS);

export const substantiateOnePortalIRSExceptionsFulfilled = createAction(
  SUBSTANTIATE_ONE_PORTAL_IRS_EXCEPTIONS_FULFILLED
);

export const resetIRSExceptionsValues = createAction(RESET_IRS_EXCEPTIONS_VALUES);

export const updateEDeliveryConsentRequested = createAction(UPDATE_EDELIVERY_CONSENT_REQUESTED);
export const updateEDeliveryConsentFulfilled = createAction(UPDATE_EDELIVERY_CONSENT_FULFILLED);
