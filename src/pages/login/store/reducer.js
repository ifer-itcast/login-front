import * as actionTypes from './actionTypes';
import isEmpty from 'lodash/isEmpty';

const initState = {
    isAuth: false,
    user: {}
};
export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SYNC_STATE_INFO:
            return {
                isAuth: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
};