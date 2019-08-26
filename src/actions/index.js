import actionCreator from '../utils/action-creator';
import {
    SEARCH_REPO_REQUEST,
    SEARCH_REPO_SUCCESS,
    SEARCH_REPO_FAIL
} from '../action-types';

export const setRepoSearchRequest = actionCreator(SEARCH_REPO_REQUEST, 'requestPayload')
export const setRepoSearchSuccess = actionCreator(SEARCH_REPO_SUCCESS, 'successPayload')
export const setRepoSearchFailed = actionCreator(SEARCH_REPO_FAIL, 'failurePayload')
