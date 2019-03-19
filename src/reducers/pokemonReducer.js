import { FETCH_POKEMONS } from '../actions/types';

const initialState = {
    pokemonList: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POKEMONS:
            return {
                ...state,
                pokemonList: action.payload
            }
        default:
            return state;
    }
}