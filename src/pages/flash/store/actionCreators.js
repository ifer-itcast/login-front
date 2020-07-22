import * as actionTypes from './actionTypes';

export const addFlashAc = data => {
    return {
        type: actionTypes.ADD_FLASH,
        payload: data
    };
};

export const deleteFlashAc = id => {
    return {
        type: actionTypes.DELETE_FLASH,
        id
    };
};