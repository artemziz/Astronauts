import {ADD_ASTRONAUT,DELETE_ASTRONAUTS} from './types';

export function addAstronaut(astronaut){
    return{
        type:ADD_ASTRONAUT,
        payload: astronaut
    }
}

export function deleteAstronauts(astronauts){
    return{
        type:DELETE_ASTRONAUTS,
        payload:astronauts
    }
}