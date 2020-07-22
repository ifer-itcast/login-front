import { combineReducers } from 'redux';
import { reducer as registerReducer } from '../pages/register/store';

// 组合所有的 reducer
export default combineReducers({
    register: registerReducer
});