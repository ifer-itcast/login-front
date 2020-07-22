import axios from '../../../utils/request';

export const registerAc = data => {
    // redux-thunk
    return dispatch => {
        return axios.post('/api/register', data);
    };
};