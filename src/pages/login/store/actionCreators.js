import * as actionTypes from './actionTypes';
import axios from '../../../utils/request';

export const loginAc = data => {
    return dispatch => {
        return axios.post('/api/login', data);
    };
};

export const syncInfoAc = data => {
    return {
        type: actionTypes.SYNC_STATE_INFO,
        payload: data
    };
};

export const logout = data => {
    return dispatch => {
        localStorage.removeItem('@#@TOKEN');
        dispatch(syncInfoAc({}));
    };
};