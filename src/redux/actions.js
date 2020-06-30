import {ADD_ASTRONAUT} from './types';

export function addAstronaut(astronaut){
    return{
        type:ADD_ASTRONAUT,
        payload: astronaut
    }
}