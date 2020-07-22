import * as actionTypes from './actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_FLASH:
            return [
                ...state,
                action.payload
            ];
        case actionTypes.DELETE_FLASH:
            const idx = state.findIndex(item => item.id === action.id);
            return [
                ...state.slice(0, idx),
                ...state.slice(idx + 1)
            ];
        default:
            return state;
    }
};