import {combineReducers} from 'redux';
import {astronautsReducer} from './AstronautsReducer';
export const rootReducer = combineReducers({
    astronauts:astronautsReducer
})