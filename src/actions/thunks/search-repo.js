import axios from 'axios';
import {
    setRepoSearchRequest,
    setRepoSearchSuccess,
    setRepoSearchFailed,
} from '../../actions';
import { constants } from '../../constants';

export const searchRepo = (val) => {
    return dispatch => {
        dispatch(setRepoSearchRequest('request'));
        axios.get(constants.url.githubRepoSearch + val).then(
            res => dispatch(setRepoSearchSuccess(res)),
            () => dispatch(setRepoSearchFailed('fail'))
        );
    }
};
