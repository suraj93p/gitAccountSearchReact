import { constants } from '../constants';
import {
    SEARCH_REPO_REQUEST,
    SEARCH_REPO_SUCCESS,
    SEARCH_REPO_FAIL
} from '../action-types';

export const repoList = (state = constants.defaultState.repoList, action = {}) => {
    switch (action.type) {
        case SEARCH_REPO_REQUEST:
            return action.requestPayload;
        case SEARCH_REPO_SUCCESS:
            return action.successPayload;
        case SEARCH_REPO_FAIL:
            return action.failurePayload;
        default:
            return state;
    }
};
